// External imports
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Internal imports
import ListScreen from './components/ListScreen';
import DetailsScreen from './components/DetailsScreen';
import AboutModal from './components/AboutModal'


const MainStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();


function MainStackScreen() {
  return (
      <MainStack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000959',
          },
          headerTintColor: '#d4a62a',
          headerTitleStyle: {
            fontFamily: 'Oswald_700Bold'
          }
        }}>
        <MainStack.Screen name="List" component={ListScreen}
          options={{
              title: 'Monster Hunter Rise',
              headerTitleStyle: {
                fontFamily: 'Oswald_700Bold',
              },
            }}
          />
        <MainStack.Screen name="Details" component={DetailsScreen} />
      </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }}/>
          <RootStack.Screen name="AboutModal" component={AboutModal} options={{ headerShown: false }}/>
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}
