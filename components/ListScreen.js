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
  const monster = monster_dict[props.monster_id];

  return (
    <View style={styles.monsterRow} >
      <Text style={{fontWeight: 'bold', color: monster.color ? monster.color : "#000000"}}>
        {monster.name.charAt(0)}
      </Text>
      <Text>{monster.name}</Text>
      <CustomButton
        title=">"
        onPress={() => navigation.navigate('Details', {monster_id: monster.id})}
      />
    </View>
  )
}


export default function ListScreen() {
  const monster_rows = monster_list;

  return (
    <View style={styles.container}>
      {monster_rows.map(monster => (
        <MonsterRow key={monster.id} monster_id={monster.id} monster_name={monster.name} />
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
