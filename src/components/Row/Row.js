import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import RowStyle from "./styles/RowStyle";


const Row = ({ navigation }) => {
  return (
    <View style={RowStyle.row}>
          <View style={RowStyle.backmenu}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={RowStyle.rectangleA}>
                <Text style={RowStyle.icon}>⬅️</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
  );
};

export default Row;
