import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import Toast from "react-native-toast-message";

// Screens - Auth & Onboarding
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RegisterCredentialsScreen from "./screens/RegisterCredentialsScreen";

// Screens - Main App
import HomeLoggedScreen from "./screens/HomeLoggedScreen";
import SettingsScreen from "./screens/SettingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SupportScreen from "./screens/SupportScreen";
import StatsScreen from "./screens/StatsScreen";
import GoalScreen from "./screens/GoalScreen";
import RisparmioScreen from "./screens/RisparmioScreen";
import NotificationScreen from "./screens/NotificationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Pacifico: Pacifico_400Regular,
  });

  if (!fontsLoaded) return null; // oppure un loading spinner

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          {/* ONBOARDING / AUTH */}
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="RegisterStep2"
            component={RegisterCredentialsScreen}
          />

          {/* MAIN APP */}
          <Stack.Screen name="HomeLogged" component={HomeLoggedScreen} />
          <Stack.Screen name="Support" component={SupportScreen} />
          <Stack.Screen name="Stats" component={StatsScreen} />
          <Stack.Screen name="Goal" component={GoalScreen} />
          <Stack.Screen name="Risparmio" component={RisparmioScreen} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}
