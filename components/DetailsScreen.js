import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function DetailsScreen({route}) {
  const navigation = useNavigation()
  const { testParam } = route.params;

  return (
    <View style={styles.container}>
      <Text>{testParam}</Text>
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
