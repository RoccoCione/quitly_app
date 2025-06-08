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
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import PasswordChangeModal from "./PasswordChangeModal";
import { useNavigation } from "@react-navigation/native";
import DeviceFrame from "../screens/DeviceFrame";
import TopSpace from "../components/TopSpace";
import ScreenContainer from "../components/ScreenContainer";
import BottomNavbar from "../components/BottomNavbar";

export default function ProfileScreen() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [dataNascita, setDataNascita] = useState("");
  const [altezza, setAltezza] = useState("");
  const [peso, setPeso] = useState("");
  const [editable, setEditable] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const navigation = useNavigation();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <DeviceFrame>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TopSpace title="Profilo" />

        <ScreenContainer>
          <View style={styles.avatarContainer}>
            <TouchableOpacity style={styles.avatarWrapper} onPress={pickImage}>
              <Image
                source={
                  profileImage
                    ? { uri: profileImage }
                    : require("../assets/avatar_placeholder.png")
                }
                style={styles.avatar}
              />
              <View style={styles.editIcon}>
                <Ionicons name="camera-outline" size={16} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>

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
        </ScreenContainer>

        <PasswordChangeModal
          visible={showPasswordModal}
          onClose={() => setShowPasswordModal(false)}
        />

        <BottomNavbar />
      </KeyboardAvoidingView>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    marginBottom: 28,
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ccc",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#2E4E45",
    padding: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
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
});
