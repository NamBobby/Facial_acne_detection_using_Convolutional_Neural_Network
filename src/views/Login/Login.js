import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import LoginStyle from './styles/LoginStyle';
import { useNavigation } from '@react-navigation/native';

import { deleteAllData , initDatabase, addUser, getUserByEmailAndPassword, getUserByEmail} from '../../../database';

const Login = () => {

  const [showSignIn, setShowSignIn] = useState(true);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    //deleteAllData(); 
    initDatabase(); // Khởi tạo cơ sở dữ liệu
  }, []);

  const handleToggle = () => {
    setShowSignIn(!showSignIn);
  };

  const handleSignIn = async () => {
    if (email === '' || password === '') {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin.');
      return;
    }
    try {
      const user = await getUserByEmailAndPassword(email, password);
      if (user) {
        navigation.navigate('Home', { user: { name: user.name, email, userId: user.userId } });
      } else {
        Alert.alert('Thông báo', 'Tài khoản không tồn tại hoặc nhập sai thông tin.');
      }
    } catch (error) {
      console.log('Lỗi khi lấy dữ liệu người dùng:', error);
    }
  };

  const handleSignUp = async () => {
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Thông báo', 'Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }
    try {
      const existingUser = await getUserByEmail(email);
      if (existingUser) {
        Alert.alert('Thông báo', 'Tài khoản đã tồn tại.');
      } else {
        await addUser(name, email, password);
        setShowSignIn(true);
      }
    } catch (error) {
      console.log('Lỗi khi thêm dữ liệu:', error);
    }
  };
  
  return (
    <View style={LoginStyle.container}>
      <View style={LoginStyle.topinfo}>
        {showSignIn ? (
          <View style={LoginStyle.inputContainer}>
            <Text style={LoginStyle.title}>SignIn</Text>
            <TextInput
              style={LoginStyle.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={LoginStyle.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={LoginStyle.button} onPress={handleSignIn}>
              <Text style={LoginStyle.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={LoginStyle.inputContainer}>
            <Text style={LoginStyle.title}>SignUp</Text>
            <TextInput
              style={LoginStyle.input}
              placeholder="Name"
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              style={LoginStyle.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={LoginStyle.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              style={LoginStyle.input}
              placeholder="PasswordConfirm"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <TouchableOpacity style={LoginStyle.button} onPress={handleSignUp}>
              <Text style={LoginStyle.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity style={LoginStyle.toggleButton} onPress={handleToggle}>
          <Text style={LoginStyle.toggleButtonText}>
            {showSignIn ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
