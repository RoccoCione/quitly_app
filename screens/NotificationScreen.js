import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DeviceFrame from "../screens/DeviceFrame";

export default function NotificationsScreen() {
  const navigation = useNavigation();

  const [notifications, setNotifications] = useState({
    dailyReminder: true,
    progressUpdates: false,
    supportMessages: true,
    goalAchieved: true,
    newsAndTips: false,
  });

  const toggleSwitch = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <DeviceFrame>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Notifiche</Text>
        <Text style={styles.subText}>In questa schermata puoi personalizzare le notifiche dell'app!</Text>
        <Text style={styles.subText}>Seleziona quali notifiche desideri ricevere:</Text>

        <View style={styles.optionsContainer}>
          {Object.entries(notifications).map(([key, value]) => (
            <View key={key} style={styles.optionRow}>
              <Text style={styles.optionLabel}>{labels[key]}</Text>
              <Switch
                value={value}
                onValueChange={() => toggleSwitch(key)}
                thumbColor={value ? "#fff" : "#ccc"}
                trackColor={{ false: "#ccc", true: "#2E4E45" }}
              />
            </View>
          ))}
        </View>
      </ScrollView>

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
    </DeviceFrame>
  );
}

const labels = {
  dailyReminder: "Promemoria giornalieri",
  progressUpdates: "Aggiornamenti sui progressi",
  supportMessages: "Messaggi di supporto",
  goalAchieved: "Obiettivi raggiunti",
  newsAndTips: "Novità e consigli",
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 32,
    alignItems: "center",
    paddingBottom: 100,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#2E4E45",
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: "#2E4E45",
    textAlign: "center",
    marginBottom: 10,
  },
  optionsContainer: {
    width: "100%",
    marginTop: 24,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  optionLabel: {
    fontSize: 16,
    color: "#2E4E45",
    flex: 1,
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
