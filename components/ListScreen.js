// External imports
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, TextInput, Image, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as Linking from 'expo-linking';


// Internal imports
import CustomButton from './CustomButton'
import CustomText from './CustomText'
import {monster_list, monster_dict} from '../MonsterList'

var screenWidth = Dimensions.get('window').width; //full width
const bgImage = require('../assets/bg_texture.jpg');

function MonsterRow(props){
  const navigation = useNavigation()
  const monster = monster_dict[props.monster_id];

  return (
    <View style={styles.monsterRow} >
      <View style={styles.letterIconContainer}>
      <Text style={[styles.letterIcon, {fontFamily: "SuperMario256", color: monster.color ? monster.color : "#000000"}]}>
        {monster.name.charAt(0)}
      </Text>
      </View>
      <View style={styles.monsterName}>
        <CustomText style={{fontSize: 18, paddingRight: 5}} text={monster.name} />
        {monster.sunbreak && <Image style={{width: 40, height: 40}} source={require("../assets/sunbreak.png")} />}
      </View>
      <CustomButton
        title=">"
        onPress={() => navigation.navigate('Details', {monster_id: monster.id})}
        customClass={styles.goDetailsButton}
      />
    </View>
  )
}


export default function ListScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [sunBreakEnabled, setSunbreak] = useState(true);
  let monster_rows = [];

  for(monster of monster_list){
    if(monster.name && monster.name.toUpperCase().match(searchText.toUpperCase())){
      if(sunBreakEnabled || !monster.sunbreak){
          monster_rows.push(monster);
      }
    }
  }

  // Add Button header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton
            onPress={() => navigation.navigate('AboutModal')}
            title="?"
            customClass={styles.infoButton}
          />
      ),
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground source={bgImage} style={styles.imageBg} imageStyle={styles.imageBgInner}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchText}
            placeholder="Search For Monster"
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
            }}
          />
          <CustomButton title="X" onPress={()=>setSearchText("")}
            customClass={styles.searchClearButton}
          />
        </View>

        <View style={styles.sunbreakFilter}>
          <CustomText text="Show Sunbreak Monsters" style={styles.sunbreakText}/>
          <Checkbox
            value={sunBreakEnabled}
            color="#d4a62a"
            onValueChange={val => {
              setSunbreak(val);
            }}
          />
        </View>

        {monster_rows.map(monster => (
          <MonsterRow key={monster.id} monster_id={monster.id} monster_name={monster.name} />
        ))}
        <View style={{alignItems: "center"}}>
          <CustomText style={{paddingBottom: 10, fontSize: 10}} text="End of List" />
          <CustomText text="Thank you for using this app! If you enjoy it please consider leaving a rating/review!" style={{paddingBottom: 15, paddingHorizontal: screenWidth/15}}/>
          <CustomButton title="Review" onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=io.itch.ztuu.ele_check_mhrise')} customClass={{marginBottom: 55, width: 125}} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f478f',
  },
  imageBg: {
    flex: 1,
  },
  imageBgInner: {
    opacity: 0.1, resizeMode: "cover",
  },
  monsterRow: {
    width: screenWidth,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: screenWidth/15,
  },
  monsterName: {
    flexDirection: "row",
    alignItems: "center",
    color: "red",
  },
  letterIconContainer: {
    borderColor: "#000959",
    borderStyle: "solid",
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  letterIcon: {
    fontSize: 20,
  },
  searchBox: {
    flexDirection: "row",
    paddingHorizontal: screenWidth/15,
    marginTop: 10,
  },
  sunbreakFilter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: screenWidth/15,
    marginVertical: 10,
  },
  sunbreakText: {
    paddingRight: 5,
  },
  searchText: {
    flex: 1,
    borderColor: "#000959",
    backgroundColor: "#6b75bf",
    borderStyle: "solid",
    borderWidth: 1,
    paddingHorizontal: 5
  },
  searchClearButton: {
    borderRadius: 0,
    backgroundColor: "#eb4034",
    paddingHorizontal: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: "#000959",
  },
  goDetailsButton: {
    elevation: 8,
    width: 35,
    height: 35,
    justifyContent: "center",
  },
  infoButton: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginRight: 10
  }
});
