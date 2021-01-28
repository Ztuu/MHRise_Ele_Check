// External imports
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// Internal imports
import {monster_dict} from '../MonsterList'

function DetailDisplay(props) {
  const monster_id = props.monster_id;
  const monster = monster_dict[monster_id];

  if(monster.weakness){
    return (
      <View>
        <Text style={styles.heading}>Weaknesses</Text>
        {Object.keys(monster.weakness).map((key)  => (
          <>
          {monster.weakness[key] === true && <Text>{key}</Text>}
          </>
        ))}
        <Text style={styles.heading}>Resists</Text>
      </View>
    )
  }else{
    // Error case if data is missing
    return(
      <Text>Weakness Missing</Text>
    )
  }
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
    <View style={styles.container}>
      <Text>Name: {monster.name}</Text>
      {data_display}
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
  heading: {
    fontWeight: "bold"
  }
});
