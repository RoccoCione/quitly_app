import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Modal,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import DeviceFrame from "../screens/DeviceFrame";

export default function SettingsScreen({ navigation }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigation.navigate("Login");
    Toast.show({
      type: "success",
      text1: "Logout effettuato con successo",
    });
  };

  return (
    <DeviceFrame>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Impostazioni</Text>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Profile")}
        >
          <FontAwesome5
            name="user"
            size={18}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.optionText}>Profilo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons
            name="globe-outline"
            size={20}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.optionText}>Lingua</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons
            name="notifications-outline"
            size={20}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.optionText}>Notifiche</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.optionText}>Info</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => setShowLogoutModal(true)}
        >
          <MaterialIcons
            name="logout"
            size={20}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.optionText}>Esci</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* NAVBAR fissa */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeLogged")}>
          <Ionicons name="home-outline" size={24} color="#2E4E45" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Support")}>
          <Ionicons name="headset-outline" size={24} color="#2E4E45" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Stats")}>
          <Ionicons name="bar-chart-outline" size={24} color="#2E4E45" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="settings-outline" size={24} color="#2E4E45" />
        </TouchableOpacity>
      </View>

      {/* MODAL logout */}
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
  container: {
    flexGrow: 1,
    padding: 32,
    alignItems: "center",
    paddingBottom: 100, // spazio per la navbar
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 48,
    color: "#2E4E45",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E4E45",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 18,
    width: "100%",
    marginBottom: 18,
    elevation: 3,
  },
  optionText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  icon: {
    marginRight: 14,
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  /*  MODAL  */
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
    width: "80%",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
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
