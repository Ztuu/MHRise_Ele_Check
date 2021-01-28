// External imports
import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// Internal imports
import CustomButton from './CustomButton'
import {monster_list, monster_dict} from '../MonsterList'

var screenWidth = Dimensions.get('window').width; //full width

function MonsterRow(props){
  const navigation = useNavigation()
  const item = monster_dict[props.monster_id];

  return (
    <View style={styles.monsterRow} >
      <Text>{item.name.charAt(0)}</Text>
      <Text>{item.name}</Text>
      <CustomButton
        title=">"
        onPress={() => navigation.navigate('Details', {monster_id: item.id})}
      />
    </View>
  )
}


export default function ListScreen() {
  const monster_rows = monster_list;

  return (
    <View style={styles.container}>
      {monster_rows.map(monster => (
        <MonsterRow key={monster.id} monster_id={monster.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#cfcfcf',
    alignItems: 'center',
  },
  monsterRow: {
    width: screenWidth,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
  },
});
