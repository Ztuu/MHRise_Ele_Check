// External imports
import {React, useCallback} from 'react';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Oswald_400Regular, Oswald_700Bold  } from '@expo-google-fonts/oswald';


// Internal imports
import ListScreen from './components/ListScreen';
import DetailsScreen from './components/DetailsScreen';
import AboutModal from './components/AboutModal'

// Prevent splash screen from hiding automatically
preventAutoHideAsync();

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();


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
  // Load google fonts
  let [googleFontsLoaded] = useFonts({
    Oswald_400Regular,
    Oswald_700Bold
  });
  // Load local project fonts
  let [fontsLoaded] = useFonts({
    'SuperMario256': require('./assets/fonts/SuperMario256.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    // Only hide splash screen when fonts have all been loaded
    if (googleFontsLoaded && fontsLoaded) {
      await hideAsync();
    }
  }, [googleFontsLoaded, fontsLoaded]);

  return (
    <View onLayout={onLayoutRootView} style={{flex: 1}}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="Main" component={MainStackScreen} />
          <RootStack.Screen name="AboutModal" component={AboutModal} />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}
