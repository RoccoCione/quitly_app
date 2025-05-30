import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const t = setTimeout(() => navigation.replace("Home"), 3000);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.deviceContainer}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#888",
    justifyContent: "center",
    alignItems: "center",
  },
  deviceContainer: {
    width: 390,
    height: 844,
    backgroundColor: "#E3EDDE",
    borderRadius: 30,
    overflow: "hidden",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 32,
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
