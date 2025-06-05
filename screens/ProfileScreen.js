import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PasswordChangeModal from "./PasswordChangeModal";
import { useNavigation } from "@react-navigation/native";
import DeviceFrame from "../screens/DeviceFrame"; // percorso corretto

export default function ProfileScreen() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [dataNascita, setDataNascita] = useState("");
  const [altezza, setAltezza] = useState("");
  const [peso, setPeso] = useState("");
  const [editable, setEditable] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const navigation = useNavigation();

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
          <Text style={styles.title}>Profilo</Text>

          <Image
            source={{
              uri: "https://via.placeholder.com/120x120.png?text=User",
            }}
            style={styles.avatar}
          />

          <TextInput
            placeholder="Nome"
            placeholderTextColor="#888"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
            editable={editable}
          />

          <TextInput
            placeholder="Cognome"
            placeholderTextColor="#888"
            value={cognome}
            onChangeText={setCognome}
            style={styles.input}
            editable={editable}
          />

          <TextInput
            placeholder="Data di nascita (GG/MM/AAAA)"
            placeholderTextColor="#888"
            value={dataNascita}
            onChangeText={setDataNascita}
            style={styles.input}
            editable={editable}
            keyboardType="numbers-and-punctuation"
          />

          {/* Altezza e Peso affiancati */}
          <View style={styles.row}>
            <TextInput
              placeholder="Altezza (cm)"
              placeholderTextColor="#888"
              value={altezza}
              onChangeText={setAltezza}
              style={[styles.input, styles.halfInput]}
              editable={editable}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Peso (kg)"
              placeholderTextColor="#888"
              value={peso}
              onChangeText={setPeso}
              style={[styles.input, styles.halfInput]}
              editable={editable}
              keyboardType="numeric"
            />
          </View>

          {/* Pulsanti */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setEditable(!editable)}
            >
              <Text style={styles.buttonText}>
                {editable ? "Salva dati" : "Modifica dati"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowPasswordModal(true)}
            >
              <Text style={styles.buttonText}>Modifica password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Modal cambio password */}
      <PasswordChangeModal
        visible={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      />

      {/* Navbar */}
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeLogged")}>
            <Ionicons name="home-outline" size={28} color="#2E4E45" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Support")}>
            <Ionicons name="headset-outline" size={28} color="#2E4E45" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Stats")}>
            <Ionicons name="bar-chart-outline" size={28} color="#2E4E45" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="settings-outline" size={28} color="#2E4E45" />
          </TouchableOpacity>
        </View>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 32,
    paddingBottom: 100, // spazio per la navbar
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 28,
    color: "#2E4E45",
    marginTop: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 28,
    backgroundColor: "#ccc",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    width: "100%",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfInput: {
    width: "48%",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    width: "100%",
  },
  button: {
    flex: 1,
    backgroundColor: "#2E4E45",
    paddingVertical: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
