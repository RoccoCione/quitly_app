import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PasswordChangeModal from './PasswordChangeModal';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [dataNascita, setDataNascita] = useState('');
  const [altezza, setAltezza] = useState('');
  const [peso, setPeso] = useState('');
  const [editable, setEditable] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.deviceContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Profilo</Text>

          <Image
            source={{ uri: 'https://via.placeholder.com/100x100.png?text=User' }}
            style={styles.avatar}
          />

          <TextInput
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
            editable={editable}
          />
          <TextInput
            placeholder="Cognome"
            value={cognome}
            onChangeText={setCognome}
            style={styles.input}
            editable={editable}
          />
          <TextInput
            placeholder="Data di nascita"
            value={dataNascita}
            onChangeText={setDataNascita}
            style={styles.input}
            editable={editable}
          />

          <View style={styles.row}>
            <TextInput
              placeholder="Altezza"
              value={altezza}
              onChangeText={setAltezza}
              style={[styles.input, styles.halfInput]}
              editable={editable}
            />
            <TextInput
              placeholder="Peso"
              value={peso}
              onChangeText={setPeso}
              style={[styles.input, styles.halfInput]}
              editable={editable}
            />
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => setEditable(!editable)}>
              <Text style={styles.buttonText}>{editable ? 'Salva dati' : 'Modifica dati'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setShowPasswordModal(true)}>
              <Text style={styles.buttonText}>Modifica password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <PasswordChangeModal visible={showPasswordModal} onClose={() => setShowPasswordModal(false)} />

        <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeLogged')}>
            <Ionicons name="home-outline" size={24} color="#2E4E45" />
        </TouchableOpacity>
            <Ionicons name="headset-outline" size={24} color="#2E4E45" />
            <Ionicons name="bar-chart-outline" size={24} color="#2E4E45" />
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="settings-outline" size={24} color="#2E4E45" />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#888',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceContainer: {
    width: 390,
    height: 700,
    backgroundColor: '#fff',
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 10,
  },
  container: {
    padding: 32,
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 24,
    backgroundColor: '#ccc',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    width: '100%',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfInput: {
    width: '48%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    width: '100%',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 10,
  },
});
