// components/BottomNavbar.js
import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BottomNavbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeLogged")}
        style={styles.tabItem}
      >
        <Ionicons name="home-outline" size={24} color="#2E4E45" />
        <Text style={styles.tabLabel}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Support")}
        style={styles.tabItem}
      >
        <Ionicons name="headset-outline" size={24} color="#2E4E45" />
        <Text style={styles.tabLabel}>Supporto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Stats")}
        style={styles.tabItem}
      >
        <Ionicons name="bar-chart-outline" size={24} color="#2E4E45" />
        <Text style={styles.tabLabel}>Statistiche</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Settings")}
        style={styles.tabItem}
      >
        <Ionicons name="settings-outline" size={24} color="#2E4E45" />
        <Text style={styles.tabLabel}>Impostazioni</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    color: "#2E4E45",
    fontWeight: "500",
  },
});
