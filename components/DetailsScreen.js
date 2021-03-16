// External imports
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// Internal imports
import {monster_dict} from '../MonsterList'
import CustomText from './CustomText'

var screenWidth = Dimensions.get('window').width; //full width
const bgImage = require('../assets/bg_texture.jpg');

const elementIcons = {
  dragon: require("../assets/element_icons/dragon.png"),
  fire: require("../assets/element_icons/fire.png"),
  lightning: require("../assets/element_icons/lightning.png"),
  water: require("../assets/element_icons/water.png"),
  ice: require("../assets/element_icons/ice.png"),
  poison: require("../assets/status_icons/poison.png"),
  paralysis: require("../assets/status_icons/paralysis.png"),
  sleep: require("../assets/status_icons/sleep.png"),
  blast: require("../assets/status_icons/blast.png"),
}


function IconDisplay({heading_text, icon_dict}){
  // Displays a list of elemental icons based on which values are true under a heading
  if (icon_dict) {
    // Check if all values are false
    let all_false = true;
    for(var key in icon_dict){
      if (icon_dict[key] === true){
        all_false = false;
      }
    }
    if (all_false === true){
      return(
        <View style={{paddingBottom: 10}}>
          <CustomText text={heading_text} bold="true" style={styles.fontSizing}/>
          <CustomText text="None" style={styles.fontSizing}/>
        </View>
      )
    }

    // If at least one value is true return list of icons
    return (
      <View style={{paddingBottom: 10}}>
        <CustomText text={heading_text} bold="true" style={styles.fontSizing} />
        {Object.keys(icon_dict).map((key)  => (
          <React.Fragment key={key}>
          {icon_dict[key] === true &&
            <View style={{flexDirection: "row", alignItems: "center",}}>
              <Image
                style={styles.elementIcon}
                source={elementIcons[key]} />
              <CustomText text={key} style={[styles.fontSizing, {textTransform: 'capitalize'}]} />
            </View>
          }
          </React.Fragment>
        ))}
      </View>
    )
  }else{
    return(
      <View style={{paddingBottom: 10}}>
        <CustomText text={heading_text} bold="true" />
        <CustomText text={"No " + heading_text + " data"} />
      </View>
    )
  }

}


function DetailDisplay({monster_id}) {
  const monster = monster_dict[monster_id];
  return (
    <View style={styles.detailDisplay}>
      <CustomText text="Elemental Damage" bold="true" style={styles.sectionHeading} />
      <IconDisplay heading_text="Weaknesses" icon_dict={monster.ele_weakness} />
      <IconDisplay heading_text="Resists" icon_dict={monster.ele_resist} />

      <CustomText text="Status Ailments" bold="true" style={styles.sectionHeading} />
      <IconDisplay heading_text="Most Resisted" icon_dict={monster.most_resist} />
      <IconDisplay heading_text="Least Resisted" icon_dict={monster.least_resist} />
      <IconDisplay heading_text="Immune" icon_dict={monster.immune} />
    </View>
  )
}

export default function DetailsScreen({route}) {
  const navigation = useNavigation();
  const { monster_id } = route.params;
  const monster = monster_dict[monster_id];

  useEffect(() => {
    // Update the navbar title when component loads
    navigation.setOptions({ title: `${monster.name} Details` });
  });

  let data_display;
  if(monster.data_missing===true || monster.data_missing === undefined) {
    data_display = <View>
      <Text style={styles.fontSizing}>Data is Missing!</Text>
      <Text style={styles.fontSizing}>This is a pre-release version of this app
      and some data is not yet available. Please look for an update shortly after
       Monster Hunter Rise launches!</Text>
    </View>;
  }else{
    data_display = <DetailDisplay monster_id={monster_id} />;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground source={bgImage} style={styles.imageBg} imageStyle={styles.imageBgInner}>
        <View style={styles.scrollBody}>
          <CustomText text={"Name: " + monster.name} bold="true" style={styles.mainHeading} />
          {data_display}
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
  scrollBody: {
    paddingHorizontal: screenWidth/15,
    paddingTop: 15,
    flex: 1
  },
  imageBg: {
    flex: 1,
  },
  imageBgInner: {
    opacity: 0.1, resizeMode: "cover",
  },
  mainHeading: {
    fontSize: screenWidth>500 ? 45: 35,
    paddingBottom: 5,
  },
  sectionHeading: {
    fontSize: screenWidth>500 ? 35: 25,
  },
  detailDisplay: {
    paddingBottom: 20,
  },
  elementIcon: {
    width: 30, height: 30
  },
  fontSizing: {
    fontSize: screenWidth>500 ? 27: 17
  }
});
