// External imports
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, TextInput} from 'react-native';
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
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  let [monster_rows, setMonsterRows] = useState(monster_list);

  // Callback to update the monsters displayed
  const updateSearch = (text) => {
    setSearchText(text);
    let new_list = [];
    for(monster of monster_list){
      if(monster.name && monster.name.toUpperCase().match(text.toUpperCase())){
        new_list.push(monster);
      }
    }
    setMonsterRows(new_list);
  }

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
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchText}
          placeholder="Search For Monster"
          value={searchText}
          onChangeText={text => {
            updateSearch(text);
          }}
        />
        <Button title="X" onPress={()=>updateSearch("")} />
      </View>

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
  searchBox: {flexDirection: "row", paddingHorizontal: screenWidth/15},
  searchText: {flex: 1, borderColor: "#000000", borderStyle: "solid", borderWidth: 1, paddingHorizontal: 5}

});
