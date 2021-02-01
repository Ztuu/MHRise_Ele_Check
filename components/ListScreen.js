// External imports
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import AppLoading from 'expo-app-loading';
// import { useFonts } from 'expo-font';
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';

// Internal imports
import CustomButton from './CustomButton'
import {monster_list, monster_dict} from '../MonsterList'

var screenWidth = Dimensions.get('window').width; //full width

function MonsterRow(props){
  const navigation = useNavigation()
  const monster = monster_dict[props.monster_id];
  let [googleFontsLoaded] = useFonts({
    Oswald_400Regular,
  });
  let [fontsLoaded] = useFonts({
    'SuperMario256': require('../assets/fonts/SuperMario256.ttf'),
  });

  if (!(fontsLoaded && googleFontsLoaded)) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.monsterRow} >
        <View style={styles.letterIconContainer}>
        <Text style={[styles.letterIcon, {fontFamily: "SuperMario256", color: monster.color ? monster.color : "#000000"}]}>
          {monster.name.charAt(0)}
        </Text>
        </View>
        <Text style={{fontFamily: "Oswald_400Regular"}}>{monster.name}</Text>
        <CustomButton
          title=">"
          onPress={() => navigation.navigate('Details', {monster_id: monster.id})}
          customClass={{elevation: 8, width: 35, height: 35, justifyContent: "center"}}
        />
      </View>
    )
  }
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
            customClass={styles.searchClearButton}
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
        <CustomButton title="X" onPress={()=>updateSearch("")}
          customClass={{borderRadius: 0, backgroundColor: "#eb4034", paddingHorizontal: 8}}
        />
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
  letterIconContainer: {
    borderColor: "#9e9e9e",
    borderStyle: "solid",
    borderWidth: 1,
    width: 40,
    height: 40,
    // paddingHorizontal: 8,
    // paddingVertical: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  letterIcon: {
    // fontWeight: 'bold',
    fontSize: 20,
  },
  searchBox: {
    flexDirection: "row",
    paddingHorizontal: screenWidth/15
  },
  searchText: {
    flex: 1,
    borderColor: "#525252",
    backgroundColor: "#e0e0e0",
    borderStyle: "solid",
    borderWidth: 1,
    paddingHorizontal: 5
  },
  searchClearButton: {
    backgroundColor: '#787878',
    marginRight: 10
  }
});
