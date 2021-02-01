// External imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Oswald_700Bold  } from '@expo-google-fonts/oswald';


// Internal imports
import ListScreen from './components/ListScreen';
import DetailsScreen from './components/DetailsScreen';
import AboutModal from './components/AboutModal'


const MainStack = createStackNavigator();
const RootStack = createStackNavigator();


function MainStackScreen() {
  let [googleFontsLoaded] = useFonts({
      Oswald_700Bold
  });
  if(!googleFontsLoaded){
    return <AppLoading />;
  }
  return (
      <MainStack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#787878',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontFamily: 'Oswald_700Bold',
          }
        }}>
        <MainStack.Screen name="List" component={ListScreen}
          options={{
              title: 'Monster Hunter Rise',
              headerTitleStyle: {
                // alignSelf: 'center',
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
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="AboutModal" component={AboutModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
