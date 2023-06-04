import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import ShootingStyle from "./styles/ShootingStyle";
import facescan from "../../assets/image/face-scan.png";
import axios from "axios";

import Row from "../../components/Row/Row";
import UserInfo from "../../components/UserInfo/UserInfo.js";

const Shooting = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params;
  const [selectedFile, setSelectedFile] = useState(null);
  const [isOpenCamera, setIsOpenCamera] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);


  let cameraRef = useRef(null);

  const handleStartTesting = () => {
    if (!selectedFile) {
      alert("Please upload an image before testing.");
      return;
    }

    const formData = new FormData();
    formData.append("image", {
      uri: selectedFile.uri,
      name: "image.jpg",
      type: "image/jpeg",
    });

    axios
      .post("http://192.168.100.5:5000/process", formData)
      .then((response) => {
        let result = response.data.predicted_class;
        navigation.navigate("Result", { imageUrl: selectedFile.uri, result: result , user: route.params.user});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      // Check if already capturing a photo
      if (isCapturing) {
        return;
      }

      // Set capturing flag
      setIsCapturing(true);

      try {
        let photo = await cameraRef.current.takePictureAsync();
        setSelectedFile(photo);
        setIsOpenCamera(false);
      } catch (error) {
        console.log(error);
      } finally {
        // Reset capturing flag
        setIsCapturing(false);
      }
    }
  };

  const handleChooseFromGallery = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedFile(result.assets[0]);
        setIsOpenCamera(false);
        setIsCameraReady(false);
      } else {
        alert("No image selected.");
      }
    } catch (error) {
      console.log("Error selecting image from gallery:", error);
      alert("An error occurred while selecting an image from the gallery.");
    }
  };

  const handleCameraReady = () => {
    setIsCameraReady(true);
  };

  useEffect(() => {
    const getCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access the camera was denied.");
      }
    };

    getCameraPermission();
  }, []);

  const toggleCamera = () => {
    setIsOpenCamera((prevState) => !prevState);
  };

  const handleToggleCameraAndTakePhoto = () => {
    if (!isOpenCamera) {
      toggleCamera();
    } else {
      handleTakePhoto();
      setIsCameraReady(!isCameraReady);
    }
  };

  const toggleCameraType = () => {
    setCameraType(prevCameraType =>
      prevCameraType === Camera.Constants.Type.front
        ? Camera.Constants.Type.back
        : Camera.Constants.Type.front
    );
  };
  

  const handleSignOut = () => { 
    navigation.navigate("Login");
  };

  return (
    <View style={ShootingStyle.container}>
      <View style={ShootingStyle.topinfo}>
        <Row navigation={navigation}/>
        <UserInfo userName={user.name} handleSignOut={handleSignOut} />
        <View style={ShootingStyle.mainphoto}>
          <View style={ShootingStyle.content}>
            <View style={ShootingStyle.elipse2}>
              <View style={ShootingStyle.elipse}>
              {isOpenCamera ? (
                  <Camera
                    style={ShootingStyle.camera}
                    type={cameraType}
                    ref={cameraRef}
                    onCameraReady={handleCameraReady}
                  />
                ) : selectedFile ? (
                  <Image
                    source={{ uri: selectedFile.uri }}
                    style={ShootingStyle.selectedImage}
                  />
                ) : (
                  <Image
                    source={facescan}
                    style={ShootingStyle.defaultImage}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={ShootingStyle.bottominfo}>
        {isCameraReady && (
        <TouchableOpacity
            onPress={toggleCameraType}
            style={ShootingStyle.rectangleB}
        >
          <Text style={ShootingStyle.icon}>🔄</Text>
        </TouchableOpacity>
        )}
        <View style={ShootingStyle.buttonmenu}>
          <View style={ShootingStyle.upload}>
            <TouchableOpacity
              onPress={handleToggleCameraAndTakePhoto}
              style={ShootingStyle.rectangleB}
            >
              <Text style={ShootingStyle.icon}>📸</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleChooseFromGallery}
              style={ShootingStyle.rectangleB}
            >
              <Text style={ShootingStyle.icon}>🖼️</Text>
            </TouchableOpacity>
          </View>
          <View style={ShootingStyle.test}>
            <TouchableOpacity
              onPress={handleStartTesting}
              style={ShootingStyle.rectangleC}
            >
              <Text style={ShootingStyle.testText}>Start Testing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Shooting;
