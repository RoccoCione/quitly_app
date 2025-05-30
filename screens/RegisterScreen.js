import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
} from "react-native";
import DeviceFrame from "../screens/DeviceFrame"; // percorso corretto

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [dataNascita, setDataNascita] = useState("");

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
          <Image
            source={require("../assets/quitly_logo_white.png")}
            style={styles.logo}
          />

          <TextInput
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />

          <TextInput
            placeholder="Cognome"
            value={cognome}
            onChangeText={setCognome}
            style={styles.input}
          />

          <TextInput
            placeholder="Data di nascita (GG/MM/AAAA)"
            value={dataNascita}
            onChangeText={setDataNascita}
            style={styles.input}
            keyboardType="numbers-and-punctuation"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("RegisterStep2")}
          >
            <Text style={styles.buttonText}>Avanti</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={{ color: "#333" }}>
              Hai già effettuato la registrazione?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.link}>Accedi</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 60,
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2E4E45",
    paddingVertical: 18,
    borderRadius: 28,
    alignItems: "center",
    marginTop: 10,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  footer: {
    marginTop: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "#2E4E45",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
