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
      {(monster.color != "" && monster.color != undefined) && <Text style={{color: monster.color ? monster.color : "#000000"}}>
        Color: {monster.color}
      </Text>}
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
