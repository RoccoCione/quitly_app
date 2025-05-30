import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stayConnected, setStayConnected] = useState(true);

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
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry
            />

            <View style={styles.row}>
              <CheckBox
                value={stayConnected}
                onValueChange={setStayConnected}
                tintColors={{ true: '#2E4E45', false: '#ccc' }}
              />
              <Text style={styles.checkboxLabel}>Rimani connesso</Text>

              <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerLink}>Registrati</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeLogged')}>
              <Text style={styles.buttonText}>Conferma</Text>
            </TouchableOpacity>
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
    width: 390, // iPhone 14 Pro width
    height: 700, // iPhone 14 Pro height
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#333',
  },
  registerLink: {
    color: '#2E4E45',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#2E4E45',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
