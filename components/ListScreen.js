// External imports
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// Internal imports
import CustomButton from './CustomButton'


export default function ListScreen() {
  const navigation = useNavigation()
  var rows = [{
    id: 1,
    name: "Great Wroggi"
  },{
    id: 2,
    name: "Mizutsune"
  }];

  return (
    <View style={styles.container}>
      <Text>HomePage</Text>

      {rows.map(item => (
        <View style={styles.monsterRow}>
          <Text>{item.name}</Text>
          <CustomButton
            title="Go to Details"
            onPress={() => navigation.navigate('Details', {testParam: "Hello world"})}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#cfcfcf',
    alignItems: 'center',
  },
  monsterRow: {
    alignItems: 'center',
  },
});
