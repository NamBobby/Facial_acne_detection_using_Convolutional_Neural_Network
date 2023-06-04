import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Circle, Svg } from 'react-native-svg';
import { useNavigation, useRoute } from "@react-navigation/native";
import { saveResult} from '../../../database';

import UserInfo from "../../components/UserInfo/UserInfo.js";
import Row from '../../components/Row/Row';

import ResultStyle from './styles/ResultStyle.js';

const Result = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params;
  const imageUrl = route.params?.imageUrl;

  const [result, setResult] = useState('');
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    const state = navigation.getState().routes[navigation.getState().index].params;
    if (state) {
      const { result } = state;
      setResult(result);

      setTimeout(() => {
        setScanning(false);
      }, 2000);
    }
  }, [navigation]);

  const getCircleChartPercentage = () => {
    if (result === 'level_0') {
      return 25;
    } else if (result === 'level_1') {
      return 50;
    } else if (result === 'level_2') {
      return 75;
    } else if (result === 'level_3') {
      return 100;
    } else {
      return 0;
    }
  };

  const getCircleColor = () => {
    if (result === 'level_0') {
      return '#EFEFEF'; // Grey color for level 0
    } else if (result === 'level_1') {
      return '#FFC107'; // Yellow color for level 1
    } else if (result === 'level_2') {
      return '#FF5722'; // Orange color for level 2
    } else if (result === 'level_3') {
      return '#F44336'; // Red color for level 3
    } else {
      return '#FFF'; // Default color if result is empty or unknown
    }
  };

  const handleSaveResult = async () => {
    try {
      const userId = user.userId;
      const currentDate = new Date();
      const date = currentDate.toISOString().slice(0, 10); // Lấy ngày hiện tại dưới dạng chuỗi YYYY-MM-DD
      const time = currentDate.toLocaleTimeString();
  
      // Lưu kết quả vào cơ sở dữ liệu
      await saveResult(userId, date, time, result);
  
      console.log('Kết quả đã được lưu thành công:'); // Hiển thị thông báo thành công
      navigation.navigate('Tracking', { user: route.params.user });
    } catch (error) {
      console.error('Lỗi khi lưu kết quả:', error);
    }
  };

  const handleSignOut = () => { 
    navigation.navigate("Login");
  };

  return (
    <View style={ResultStyle.container}>
      <View style={ResultStyle.topinfo}>
        <Row navigation={navigation}/>
        <UserInfo userName={user.name} handleSignOut={handleSignOut} />
        <View style={ResultStyle.mainphoto}>
          <View style={ResultStyle.content}>
            <View style={ResultStyle.elipse2}>
              <View style={ResultStyle.elipse}>
                {imageUrl ? (
                  <Image source={{ uri: imageUrl }} style={ResultStyle.img} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={ResultStyle.bottominfo}>
        <View style={ResultStyle.backmenu}>
          <TouchableOpacity style={ResultStyle.rectangleA} onPress={handleSaveResult}>
            <Text style={ResultStyle.icon}>✅</Text>
          </TouchableOpacity>
        </View>
        <View style={ResultStyle.circleChart}>
          {scanning ? (
            <View style={ResultStyle.circleChartPercentage}>
              <View style={ResultStyle.contents}>
                <Text style={ResultStyle.scanningText}>Scanning...</Text>
              </View>
            </View>
          ) : (
            <View style={ResultStyle.circleChartPercentage}>
              <Svg style={ResultStyle.circleChartBackground} viewBox="0 0 50 50">
                <Circle
                  style={ResultStyle.circleChartCircle}
                  cx={25}
                  cy={25}
                  r={24}
                  strokeWidth={2}
                  stroke={getCircleColor()} // Set the stroke color based on result level
                  fill="none"
                  strokeDasharray={`${getCircleChartPercentage()} ${100 - getCircleChartPercentage()}`}
                />
              </Svg>
              <View style={ResultStyle.contents}>
                <Text style={ResultStyle.resultText}>{result}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Result;
