// External imports
import React from 'react';
import { StyleSheet, Text, View, Button, Modal, Dimensions } from 'react-native';
import * as Linking from 'expo-linking';

// Internal imports
import CustomButton from './CustomButton'
import CustomText from './CustomText'

var screenWidth = Dimensions.get('window').width; //full width

export default function ModalScreen({ navigation }) {
  return (
    <View style={styles.modalBody}>
      <CustomText text="About This App" bold="true" style={{ fontSize: 30, color: '#fff'}} />
      <CustomText text="This app was created by Stuart Paterson and is open source, released under the MIT license." style={{paddingBottom: 20, color: '#fff'}}/>
      <CustomText text="The full source code can be viewed  on Github by clicking the link below. Feel free to copy it for your own project or contribute if you have any ideas!" style={{color: '#fff'}}/>
      <CustomButton title="View Source Code" onPress={() => Linking.openURL('https://github.com/Ztuu/MHRise_React')} customClass={{marginBottom: 20}} />
      <CustomText text="If you notice any issues or mistakes in the app please let me know." style={{color: '#fff'}}/>
      <CustomButton title="Email Developer" onPress={() => Linking.openURL('mailto:stuartpdev@gmail.com')} customClass={{marginBottom: 20}}/>
      <CustomText text="This app will continue to be updated when new monsters are added to the game so please look for updates in the future!." style={{paddingBottom: 20, color: '#fff'}}/>

      <CustomButton customClass={{marginTop: 20, backgroundColor: "#ff6054"}} onPress={() => navigation.goBack()} title="Close" />
    </View>
  );
}

const styles = StyleSheet.create({
  modalBody: {
     flex: 1,
     alignItems: 'flex-start',
     justifyContent: 'center',
     backgroundColor: "#000959",
     paddingHorizontal: screenWidth/15,
  },

});
