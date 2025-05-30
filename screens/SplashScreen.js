import React, { useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DeviceFrame from "../screens/DeviceFrame";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const t = setTimeout(() => navigation.replace("Home"), 3000);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <DeviceFrame>
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Image
            source={require("../assets/quitly_logo.jpg")}
            style={styles.logo}
          />
          <ActivityIndicator
            size="large"
            color="#24433C"
            style={styles.spinner}
          />
        </View>

        <Text style={styles.tagline}>SMETTI ANCHE TU{"\n"}DI FUMARE!!</Text>
      </SafeAreaView>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 32,
    backgroundColor: "#E3EDDE", // colore dello splash
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 260,
    height: 260,
    resizeMode: "contain",
  },
  spinner: {
    marginTop: 36,
  },
  tagline: {
    marginBottom: 46,
    textAlign: "center",
    color: "#24433C",
    fontFamily: "Pacifico",
    fontSize: 20,
    fontWeight: "400",
  },
});
