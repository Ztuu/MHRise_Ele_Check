// External imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// Internal imports
import {monster_dict} from '../MonsterList'

export default function DetailsScreen({route}) {
  const navigation = useNavigation()
  const { monster_id } = route.params;
  const monster = monster_dict[monster_id];

  return (
    <View style={styles.container}>
      <Text>Name: {monster.name}</Text>
      <Text>Color: {monster.color}</Text>
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
