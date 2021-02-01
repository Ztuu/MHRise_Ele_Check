// External imports
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// Internal imports
import {monster_dict} from '../MonsterList'

var screenWidth = Dimensions.get('window').width; //full width
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
          <Text style={styles.subHeading}>{heading_text}</Text>
          <Text>None</Text>
        </View>
      )
    }

    // If at least one value is true return list of icons
    return (
      <View style={{paddingBottom: 10}}>
        <Text style={styles.subHeading}>{heading_text}</Text>
        {Object.keys(icon_dict).map((key)  => (
          <React.Fragment key={key}>
          {icon_dict[key] === true &&
            <View style={{flexDirection: "row", alignItems: "center",}}>
              <Image
                style={styles.elementIcon}
                source={elementIcons[key]} />
              <Text>{key}</Text>
            </View>
          }
          </React.Fragment>
        ))}
      </View>
    )
  }else{
    return(
      <View style={{paddingBottom: 10}}>
        <Text style={styles.subHeading}>{heading_text}</Text>
        <Text>No {heading_text} data</Text>
      </View>
    )
  }

}


function DetailDisplay({monster_id}) {
  const monster = monster_dict[monster_id];
  return (
    <View style={styles.detailDisplay}>
      <IconDisplay heading_text="Weaknesses" icon_dict={monster.weakness} />
      <IconDisplay heading_text="Resists" icon_dict={monster.resist} />
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
    data_display = <Text>Data is Missing!</Text>;
  }else{
    data_display = <DetailDisplay monster_id={monster_id} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainHeading}>Name: {monster.name}</Text>
      {data_display}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfcf',
    paddingHorizontal: screenWidth/15,
    paddingTop: 15,
  },
  mainHeading: {
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 10,
  },
  subHeading: {
    fontWeight: "bold"
  },
  detailDisplay: {
    paddingBottom: 20,
  },
  elementIcon: {
    width: 50, height: 50
  }
});
