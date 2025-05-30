import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [dataNascita, setDataNascita] = useState('');

  return (
    <View style={styles.wrapper}>
      <View style={styles.deviceContainer}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.logo}>Quitly</Text>

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
              placeholder="Data di nascita"
              value={dataNascita}
              onChangeText={setDataNascita}
              style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterStep2')}>
              <Text style={styles.buttonText}>Avanti</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={{ color: '#333' }}>Hai già effettuato la registrazione? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Accedi</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  container: {
    padding: 32,
    justifyContent: 'center',
    flexGrow: 1,
  },
  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#2E4E45',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2E4E45',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: '#2E4E45',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
