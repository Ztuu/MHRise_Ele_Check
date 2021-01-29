// External imports
import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView} from 'react-native';
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
  const navigation = useNavigation()

  // Add Button header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton
            onPress={() => navigation.navigate('AboutModal')}
            title="?"
            customClass={{backgroundColor: '#787878', marginRight: 10}}
          />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {monster_rows.map(monster => (
        <MonsterRow key={monster.id} monster_id={monster.id} monster_name={monster.name} />
      ))}
      <Text style={{paddingBottom: 15, alignSelf: "center", fontSize: 8}}>End of List</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#cfcfcf',
    paddingTop: 10,
  },
  monsterRow: {
    width: screenWidth,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: screenWidth/15,
  },
});
