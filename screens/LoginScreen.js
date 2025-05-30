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
import CheckBox from "expo-checkbox";
import DeviceFrame from "../screens/DeviceFrame"; // frame universale

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayConnected, setStayConnected] = useState(true);

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

          <View style={styles.row}>
            <CheckBox
              value={stayConnected}
              onValueChange={setStayConnected}
              color={stayConnected ? "#2E4E45" : undefined}
            />
            <Text style={styles.checkboxLabel}>Rimani connesso</Text>

            <TouchableOpacity
              style={{ marginLeft: "auto" }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.registerLink}>Registrati</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("HomeLogged")}
          >
            <Text style={styles.buttonText}>Conferma</Text>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  checkboxLabel: {
    marginLeft: 10,
    color: "#333",
    fontSize: 15,
  },
  registerLink: {
    color: "#2E4E45",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2E4E45",
    paddingVertical: 18,
    borderRadius: 28,
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
