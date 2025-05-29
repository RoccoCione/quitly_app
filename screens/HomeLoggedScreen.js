import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function HomeLoggedScreen() {
  const todaysCigarettes = 5;
  const weeklyData = [11, 9, 12, 10, 8, 7, 5];

  return (
    <View style={styles.wrapper}>
      <View style={styles.deviceContainer}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView contentContainerStyle={styles.container}>
            {/* HEADER */}
            <Text style={styles.header}>Bentornato, ****</Text>
            <Text style={styles.subText}>Oggi hai fumato</Text>
            <Text style={styles.bigCount}>{todaysCigarettes}</Text>
            <Text style={styles.subText}>sigarette!</Text>

            {/* SLIDER VISIVO FISSO */}
            <View style={styles.slider}>
              {Array.from({ length: 11 }).map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.dot,
                    i <= todaysCigarettes ? styles.dotActive : styles.dotInactive,
                  ]}
                />
              ))}
            </View>

            {/* BOTTONE */}
            <TouchableOpacity style={styles.button}>
              <Feather name="plus" size={20} color="#fff" />
              <Text style={styles.buttonText}>Registra Sigaretta</Text>
            </TouchableOpacity>

            {/* SETTIMANA */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>SETTIMANA 1 - 2025</Text>
              <View style={styles.barGroup}>
                {weeklyData.map((val, i) => (
                  <View key={i} style={styles.barWrapper}>
                    <View style={[styles.bar, { height: val * 6 }]} />
                    <Text style={styles.barLabel}>{val}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.summary}>
                Hai fumato in media 7 sigarette al giorno, due in meno rispetto l’anno scorso!
              </Text>
            </View>

            {/* ESPORTA */}
            <TouchableOpacity style={styles.button}>
              <Feather name="share-2" size={20} color="#fff" />
              <Text style={styles.buttonText}>Esporta Riepilogo</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* NAVBAR */}
          <View style={styles.navbar}>
            <Ionicons name="home-outline" size={24} color="#2E4E45" />
            <Ionicons name="headset-outline" size={24} color="#2E4E45" />
            <Ionicons name="bar-chart-outline" size={24} color="#2E4E45" />
            <Ionicons name="settings-outline" size={24} color="#2E4E45" />
          </View>
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
    height: 844,
    backgroundColor: '#fff',
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 10,
  },
  container: {
    padding: 24,
    paddingBottom: 80,
    alignItems: 'center',
  },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#2E4E45' },
  subText: { fontSize: 16, color: '#2E4E45' },
  bigCount: { fontSize: 48, fontWeight: 'bold', color: '#2E4E45' },
  slider: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  dotActive: { backgroundColor: '#2E4E45' },
  dotInactive: { backgroundColor: '#D0D0D0' },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E4E45',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#2E4E45',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginVertical: 20,
    width: '100%',
  },
  cardTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 16 },
  barGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  barWrapper: { alignItems: 'center', flex: 1 },
  bar: {
    width: 18,
    backgroundColor: '#000',
    borderRadius: 4,
    marginBottom: 4,
  },
  barLabel: { fontSize: 12, color: '#000' },
  summary: { fontSize: 14, textAlign: 'center', color: '#333', marginTop: 10 },
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
  },
});
