import React from 'react';
import { Button, StyleSheet, TouchableOpacity, Text } from "react-native";


// Custom button class based from example: https://blog.logrocket.com/creating-custom-buttons-in-react-native/
const CustomButton = ({ onPress, title, customClass }) => (
  <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, customClass]}
   activeOpacity={0.5}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);


export default CustomButton;


const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "#ffc7c7",
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  }
});
