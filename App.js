import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterCredentialsScreen from './screens/RegisterCredentialsScreen';
import HomeLoggedScreen from './screens/HomeLoggedScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RegisterStep2" component={RegisterCredentialsScreen} />
        <Stack.Screen name="HomeLogged" component={HomeLoggedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
