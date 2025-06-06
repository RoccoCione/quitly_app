import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import DeviceFrame from "../screens/DeviceFrame";
import TopSpace from "../components/TopSpace";
import BottomNavbar from "../components/BottomNavbar";

export default function SettingsScreen({ navigation }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigation.replace("Login");
    Toast.show({
      type: "success",
      text1: "Logout effettuato con successo ✔️",
    });
  };

  const settingsOptions = [
    {
      icon: <FontAwesome5 name="user" size={22} color="#2E4E45" />,
      label: "Profilo",
      onPress: () => navigation.navigate("Profile"),
    },
    {
      icon: <Ionicons name="globe-outline" size={24} color="#2E4E45" />,
      label: "Lingua",
      onPress: () => {},
    },
    {
      icon: <Ionicons name="notifications-outline" size={24} color="#2E4E45" />,
      label: "Notifiche",
      onPress: () => navigation.navigate("Notification"),
    },
    {
      icon: (
        <Ionicons name="information-circle-outline" size={24} color="#2E4E45" />
      ),
      label: "Info",
      onPress: () => {},
    },
    {
      icon: <MaterialIcons name="logout" size={24} color="#2E4E45" />,
      label: "Esci",
      onPress: () => setShowLogoutModal(true),
    },
  ];

  return (
    <DeviceFrame>
      <TopSpace title="Impostazioni" />

      <View style={styles.grid}>
        {settingsOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={item.onPress}
          >
            {item.icon}
            <Text style={styles.cardLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <BottomNavbar />

      <Modal
        transparent
        visible={showLogoutModal}
        animationType="fade"
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Sei sicuro di voler uscire?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirm]}
                onPress={confirmLogout}
              >
                <Text style={styles.modalButtonText}>Conferma</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancel]}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text style={styles.modalButtonText}>Annulla</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  card: {
    backgroundColor: "#F0F0F0", // grigio chiaro
    width: "48%",
    aspectRatio: 1,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  cardLabel: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#2E4E45", // testo verde
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 28,
    paddingHorizontal: 24,
    width: 300,
    alignItems: "center",
    elevation: 6,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 8,
  },
  confirm: {
    backgroundColor: "#2E4E45",
  },
  cancel: {
    backgroundColor: "#b30000",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
