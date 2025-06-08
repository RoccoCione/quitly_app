import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import DeviceFrame from "../screens/DeviceFrame";
import TopSpace from "../components/TopSpace";
import ScreenContainer from "../components/ScreenContainer";
import BottomNavbar from "../components/BottomNavbar";

export default function NotificationsScreen() {
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
      <TopSpace title="Notifiche" />

      <ScreenContainer>
        <Text style={styles.subText}>
          In questa schermata puoi personalizzare le notifiche dell'app!
        </Text>
        <Text style={styles.subText}>
          Seleziona quali notifiche desideri ricevere:
        </Text>

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
      </ScreenContainer>

      <BottomNavbar />
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
});
