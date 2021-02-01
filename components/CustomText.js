import React from 'react';
import { Text } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts,
  Oswald_400Regular,
  Oswald_700Bold   } from '@expo-google-fonts/oswald';

// Custom button class based from example: https://blog.logrocket.com/creating-custom-buttons-in-react-native/
const CustomText = ({ text, style, bold }) => {
  // Load Google Fonts
  let [googleFontsLoaded] = useFonts({
      Oswald_400Regular,
      Oswald_700Bold
  });

  if(!googleFontsLoaded){
    return <AppLoading />;
  }
  return (<Text style={[{fontFamily: bold ? "Oswald_700Bold": "Oswald_400Regular"}, style]}>{text}</Text>)
}


export default CustomText;
