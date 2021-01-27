import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function ListScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {testParam: "Hello world"})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfcf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
