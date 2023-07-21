// expo-custom-button-toast/src/CustomButton.js

import React from 'react';
import { TouchableOpacity, Text, Platform, NativeModules } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  const showToast = () => {
    if (Platform.OS === 'android') {
      NativeModules.ToastModule.show(title);
    } else if (Platform.OS === 'ios') {
      NativeModules.ToastModule.showToast(title);
    }
  };

  return (
    <TouchableOpacity onPress={() => {
      showToast();
      onPress();
    }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;