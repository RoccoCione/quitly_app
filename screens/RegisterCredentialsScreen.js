import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DeviceFrame from "../screens/DeviceFrame";
import Toast from "react-native-toast-message";

export default function RegisterCredentialsScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmRegistrazione = () => {
      navigation.navigate("Login");
      Toast.show({
        type: "success",
        text1: "Registrazione effettuata con successo ✔️",
      });
  }

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
          {/* freccia indietro */}
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={28} color="#2E4E45" />
          </TouchableOpacity>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <TextInput
            placeholder="Ripeti password"
            placeholderTextColor="#888"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={() => confirmRegistrazione()}>
            <Text style={styles.buttonText}>Registrati</Text>
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
  back: {
    alignSelf: "flex-start",
    marginBottom: 20, // distanza dal campo Email
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
