import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.deviceContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Impostazioni</Text>

          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Profile')}>
            <FontAwesome5 name="user" size={18} color="#fff" style={styles.icon} />
            <Text style={styles.optionText}>Profilo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="globe-outline" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.optionText}>Lingua</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="notifications-outline" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.optionText}>Notifiche</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="information-circle-outline" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.optionText}>Info</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Login')}>
            <MaterialIcons name="logout" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.optionText}>Esci</Text>
          </TouchableOpacity>
        </ScrollView>

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
    marginBottom: 40,
    color: '#000',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E4E45',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: '100%',
    marginBottom: 16,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 12,
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
