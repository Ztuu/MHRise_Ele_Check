// External imports
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// Internal imports
import {monster_dict} from '../MonsterList'

export default function DetailsScreen({route}) {
  const navigation = useNavigation();
  const { monster_id } = route.params;
  const monster = monster_dict[monster_id];

  useEffect(() => {
    // Update the navbar title when component loads
    navigation.setOptions({ title: `${monster.name} Details` });
  });


  return (
    <View style={styles.container}>
      <Text>Name: {monster.name}</Text>

      {
        (monster.data_missing === true || monster.data_missing === undefined) &&
        <Text>
          Data is Missing!
        </Text>
      }
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
