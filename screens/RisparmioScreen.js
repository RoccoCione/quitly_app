import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import DeviceFrame from "../screens/DeviceFrame";
import TopSpace from "../components/TopSpace";
import ScreenContainer from "../components/ScreenContainer";
import BottomNavbar from "../components/BottomNavbar";

export default function RecapScreen() {
  const [weeklyData] = useState([
    { day: "Lun", value: 5.2 },
    { day: "Mar", value: 5.2 },
    { day: "Mer", value: 10.4 },
    { day: "Gio", value: 0 },
    { day: "Ven", value: 5.2 },
    { day: "Sab", value: 5.2 },
    { day: "Dom", value: 0 },
  ]);

  const total = weeklyData.reduce((sum, d) => sum + d.value, 0).toFixed(2);

  return (
    <DeviceFrame>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TopSpace title="Riepilogo spese" />

        <ScreenContainer>
          {/* CARD RISPARMIO */}
          <View style={styles.savingCard}>
            <View style={styles.savingContent}>
              <Image
                source={require("../assets/pig.png")}
                style={styles.pigImage}
                resizeMode="contain"
              />
              <View style={styles.savingText}>
                <Text style={styles.savingLabel}>Risparmio Totale</Text>
                <Text style={styles.savingValue}>{total}€</Text>
              </View>
            </View>
          </View>

          {/* BOTTONI */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Feather name="plus" size={18} color="#fff" />
              <Text style={styles.actionButtonText}>
                Aggiungi{"\n"}pacchetto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Feather name="edit-3" size={18} color="#fff" />
              <Text style={styles.actionButtonText}>Modifica{"\n"}importo</Text>
            </TouchableOpacity>
          </View>

          {/* GRAFICO SETTIMANALE */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>SETTIMANA 1 - 2025</Text>
            </View>

            <View style={styles.barGroup}>
              {weeklyData.map((item, index) => (
                <View key={index} style={styles.barWrapper}>
                  <View style={[styles.bar, { height: item.value * 10 }]} />
                  <Text style={styles.barDay}>{item.day}</Text>
                  <Text style={styles.barValue}>{item.value.toFixed(2)}€</Text>
                </View>
              ))}
            </View>

            <Text style={styles.summary}>
              Hai speso in media 5.20€ al giorno, due in meno rispetto all’anno
              scorso!
            </Text>
          </View>

          {/* ESPORTA */}
          <TouchableOpacity style={styles.exportButton}>
            <Feather name="share-2" size={18} color="#fff" />
            <Text style={styles.exportButtonText}>Esporta Riepilogo</Text>
          </TouchableOpacity>
        </ScreenContainer>

        <BottomNavbar />
      </KeyboardAvoidingView>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  savingCard: {
    backgroundColor: "#fff",
    borderColor: "#2E4E45",
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    width: "100%",
  },
  savingContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pigImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  savingText: {
    flex: 1,
    justifyContent: "center",
  },
  savingLabel: {
    fontSize: 15,
    color: "#2E4E45",
    fontWeight: "600",
  },
  savingValue: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#b30000",
    marginTop: 4,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: "#2E4E45",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
    marginTop: 6,
    lineHeight: 18,
  },
  card: {
    backgroundColor: "#fff",
    borderColor: "#2E4E45",
    borderWidth: 1,
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
    width: "100%",
  },
  cardHeader: {
    marginBottom: 12,
    alignItems: "center",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2E4E45",
  },
  barGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: 140,
    marginBottom: 12,
  },
  barWrapper: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bar: {
    width: 14,
    backgroundColor: "#2E4E45",
    borderRadius: 6,
    marginBottom: 4,
  },
  barDay: {
    fontSize: 12,
    color: "#444",
  },
  barValue: {
    fontSize: 10,
    color: "#888",
  },
  summary: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    marginTop: 10,
  },
  exportButton: {
    backgroundColor: "#2E4E45",
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  exportButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 6,
  },
});
