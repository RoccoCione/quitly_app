import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";

export default function PasswordChangeModal({ visible, onClose }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleConfirm = () => {
    if (newPassword !== confirmPassword) {
      alert("Le nuove password non coincidono");
      return;
    }
    // TODO: integra logica di cambio password
    console.log("Password cambiata");
    onClose();
  };

  const disabled = !oldPassword || !newPassword || !confirmPassword;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>Cambia password</Text>

          <Text style={styles.label}>Vecchia password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <Text style={styles.label}>Nuova password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />

          <Text style={styles.label}>Conferma password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[
                styles.button,
                styles.confirm,
                disabled && { opacity: 0.5 },
              ]}
              onPress={handleConfirm}
              disabled={disabled}
            >
              <Text style={styles.buttonText}>Conferma</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.cancel]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Annulla</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 28,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2E4E45",
    textAlign: "center",
    marginBottom: 24,
  },
  label: {
    marginBottom: 6,
    color: "#444",
    fontSize: 15,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 18,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 6,
  },
  confirm: {
    backgroundColor: "#2E4E45",
  },
  cancel: {
    backgroundColor: "#b30000",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
});
