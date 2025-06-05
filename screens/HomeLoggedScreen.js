import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  View,
  Modal,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DeviceFrame from "../screens/DeviceFrame";
import Toast from "react-native-toast-message";

export default function HomeLoggedScreen() {
  const [todaysCigarettes, setTodaysCigarettes] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState("settimanale");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigation = useNavigation();

  const weeklyData = [11, 9, 12, 10, 8, 7, 5];
  const maxVal = Math.max(...weeklyData);
  const monthlyData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10) + 1);
  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

  const confirmSigaretta = () => {
    Toast.show({
      type: "success",
      text1: "Sigaretta aggiunta con successo 🚬",
    });
  };

  const groupedMonthlyData = daysOfWeek.map((_, dayIndex) =>
    monthlyData.filter((_, i) => i % 7 === dayIndex)
  );

  return (
    <DeviceFrame>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.header}>Bentornato, ****</Text>
          <Text style={styles.subText}>Oggi hai fumato</Text>
          <Text style={styles.bigCount}>{todaysCigarettes}</Text>
          <Text style={styles.subText}>sigarette!</Text>

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

          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowModal(true)}
          >
            <Feather name="plus" size={20} color="#fff" />
            <Text style={styles.buttonText}>Registra Sigaretta</Text>
          </TouchableOpacity>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>
                {viewMode === "settimanale" ? "SETTIMANA 1 - 2025" : "RIEPILOGO MENSILE"}
              </Text>
              <TouchableOpacity
                style={styles.dropdownToggle}
                onPress={() => setShowDropdown(!showDropdown)}
              >
                <Text style={styles.dropdownText}>{viewMode}</Text>
                <Ionicons name="chevron-down" size={16} color="#999" />
              </TouchableOpacity>
            </View>

            {viewMode === "settimanale" ? (
              <View style={styles.barGroup}>
                {weeklyData.map((val, i) => (
                  <View key={i} style={styles.barWrapper}>
                    <View style={[styles.bar, { height: (val / maxVal) * 120 }]} />
                    <Text style={styles.barLabel}>{val}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <View style={styles.monthlyChart}>
                {daysOfWeek.map((day, index) => (
                  <View key={index} style={styles.dayColumn}>
                    <Text style={styles.dayLabel}>{day}</Text>
                    {groupedMonthlyData[index].map((val, i) => (
                      <View key={i} style={styles.monthDot}>
                        <Text style={styles.monthDotText}>{val}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            )}

            <Text style={styles.summary}>
              {viewMode === "settimanale"
                ? "Hai fumato in media 7 sigarette al giorno, due in meno rispetto l’anno scorso!"
                : "Panoramica giornaliera del mese"}
            </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Feather name="share-2" size={20} color="#fff" />
            <Text style={styles.buttonText}>Esporta Riepilogo</Text>
          </TouchableOpacity>
        </ScrollView>

        {showDropdown && (
          <View style={styles.overlayDropdown}>
            {['settimanale', 'mensile'].map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.dropdownItem}
                onPress={() => {
                  setViewMode(option);
                  setShowDropdown(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Modal
          transparent
          visible={showModal}
          animationType="fade"
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.modalWrapper}>
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>Sei sicuro della scelta?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.confirm]}
                  onPress={() => {
                    setTodaysCigarettes((prev) => prev + 1);
                    setShowModal(false);
                    confirmSigaretta();
                  }}
                >
                  <Text style={styles.modalButtonText}>Conferma</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancel]}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.modalButtonText}>Annulla</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeLogged")}>
            <Ionicons name="home-outline" size={28} color="#2E4E45" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Support")}>
            <Ionicons name="headset-outline" size={28} color="#2E4E45" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Stats")}>
            <Ionicons name="bar-chart-outline" size={28} color="#2E4E45" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="settings-outline" size={28} color="#2E4E45" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 120,
    alignItems: "center",
    flexGrow: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2E4E45",
    marginBottom: 6,
  },
  subText: { fontSize: 16, color: "#2E4E45" },
  bigCount: { fontSize: 54, fontWeight: "bold", color: "#2E4E45" },
  slider: {
    flexDirection: "row",
    marginVertical: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  dotActive: { backgroundColor: "#2E4E45" },
  dotInactive: { backgroundColor: "#D0D0D0" },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E4E45",
    paddingVertical: 16,
    paddingHorizontal: 34,
    borderRadius: 28,
    marginVertical: 14,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderColor: "#2E4E45",
    borderWidth: 1,
    borderRadius: 14,
    padding: 18,
    marginVertical: 24,
    width: "100%",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: { fontWeight: "bold", fontSize: 17 },
  dropdownToggle: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
  },
  dropdownText: {
    fontSize: 14,
    color: "#333",
    marginRight: 6,
  },
  barGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 140,
  },
  barWrapper: { alignItems: "center", flex: 1 },
  bar: {
    width: 20,
    backgroundColor: "#2E4E45",
    borderRadius: 4,
    marginBottom: 6,
  },
  barLabel: { fontSize: 13, color: "#2E4E45" },
  summary: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    marginTop: 14,
  },
  overlayDropdown: {
    position: 'absolute',
    top: 260,
    right: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    zIndex: 1000,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dropdownItem: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#333',
  },
  monthlyChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dayColumn: {
    alignItems: 'center',
    marginHorizontal: 4,
  },
  dayLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#2E4E45',
  },
  monthDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  monthDotText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 28,
    paddingHorizontal: 24,
    width: 300,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  confirm: { backgroundColor: "#2E4E45" },
  cancel: { backgroundColor: "#b30000" },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
