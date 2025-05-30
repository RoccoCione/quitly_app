import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';

export default function PasswordChangeModal({ visible, onClose }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirm = () => {
    if (newPassword === confirmPassword) {
      console.log('Password cambiata');
      onClose();
    } else {
      alert('Le nuove password non coincidono');
    }
  };

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
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
            <TouchableOpacity style={[styles.button, styles.confirm]} onPress={handleConfirm}>
              <Text style={styles.buttonText}>Conferma</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancel]} onPress={onClose}>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    width: 320,
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    marginBottom: 6,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  confirm: {
    backgroundColor: '#000',
  },
  cancel: {
    backgroundColor: '#b30000',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
