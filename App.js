import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

// Importa gli schermi
import SplashScreen from "./screens/SplashScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterCredentialsScreen from "./screens/RegisterCredentialsScreen";
import HomeLoggedScreen from "./screens/HomeLoggedScreen";
import SettingsScreen from "./screens/SettingScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Pacifico: Pacifico_400Regular,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="RegisterStep2"
          component={RegisterCredentialsScreen}
        />
        <Stack.Screen name="HomeLogged" component={HomeLoggedScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
