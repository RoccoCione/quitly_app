import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import DeviceFrame from "../screens/DeviceFrame";
import TopSpace from "../components/TopSpace";
import ScreenContainer from "../components/ScreenContainer";
import BottomNavbar from "../components/BottomNavbar";

export default function InfoScreen() {
  return (
    <DeviceFrame>
      <TopSpace title="Info" />
      <ScreenContainer>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Quitly v1.0.0</Text>
          <Text style={styles.text}>
            Quitly è un'app pensata per aiutarti a smettere di fumare,
            monitorando il tuo progresso, supportando la tua motivazione e
            migliorando la tua salute passo dopo passo.
          </Text>
          <Text style={styles.text}>
            Tutti i dati vengono salvati localmente. Nessuna informazione viene
            condivisa.
          </Text>
          <Text style={styles.small}>
            © 2025 Quitly. Tutti i diritti riservati.
          </Text>
        </ScrollView>
      </ScreenContainer>
      <BottomNavbar />
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E4E45",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 12,
    lineHeight: 22,
    textAlign: "center",
  },
  small: {
    marginTop: 40,
    fontSize: 13,
    color: "#888",
    textAlign: "center",
  },
});
