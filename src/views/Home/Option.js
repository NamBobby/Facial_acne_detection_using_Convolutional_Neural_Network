import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles/Homepage.styles.js";

const Option = ({ onPressShooting, onPressTracking }) => {
  return (
    <View style={styles.option}>
      <View style={styles.rectangle}>
        <TouchableOpacity onPress={onPressShooting}>
          <View style={styles.icon}>
            <Text>🔎</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rectangle}>
        <TouchableOpacity onPress={onPressTracking}>
          <View style={styles.icon}>
            <Text>📈</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Option;
