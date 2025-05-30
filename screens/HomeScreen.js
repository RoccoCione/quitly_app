import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import DeviceFrame from "../screens/DeviceFrame"; // percorso corretto

export default function HomeScreen({ navigation }) {
  return (
    <DeviceFrame>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo immagine al posto del testo per coerenza con Splash */}
          <Image
            source={require("../assets/quitly_logo_white.png")}
            style={styles.logo}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Accedi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>Registrati</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  logo: {
    width: 240,
    height: 240,
    resizeMode: "contain",
    marginBottom: 80,
  },
  button: {
    width: "80%",
    backgroundColor: "#2E4E45",
    paddingVertical: 18,
    borderRadius: 28,
    marginVertical: 14,
    alignItems: "center",
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
