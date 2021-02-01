// External imports
import React from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import * as Linking from 'expo-linking';

// Internal imports
import CustomButton from './CustomButton'


export default function ModalScreen({ navigation }) {
  return (
    <View style={styles.modalBody}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>About This App</Text>
      <Text></Text>
      <CustomButton title="View Source Code" onPress={() => Linking.openURL('https://github.com/Ztuu/MHRise_React')} />

      <CustomButton customClass={{marginTop: 20, backgroundColor: "#ff6054"}} onPress={() => navigation.goBack()} title="Close" />
    </View>
  );
}

const styles = StyleSheet.create({
  modalBody: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: "#919191"
  },

});
