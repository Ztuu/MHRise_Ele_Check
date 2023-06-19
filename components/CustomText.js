import React from 'react';
import { Text } from "react-native";

// Custom button class based from example: https://blog.logrocket.com/creating-custom-buttons-in-react-native/
const CustomText = ({ text, style, bold }) => {
  return (<Text style={[{fontFamily: bold ? "Oswald_700Bold": "Oswald_400Regular"}, style]}>{text}</Text>)
}


export default CustomText;
