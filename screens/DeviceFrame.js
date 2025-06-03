import React from "react";
import { View, StyleSheet } from "react-native";

const DEVICE_WIDTH = 390; // oppure 393
const DEVICE_HEIGHT = 675; // oppure 852
const BORDER_RADIUS = 30;

export default function DeviceFrame({ children, style }) {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.deviceContainer, style]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  // grigio di fondo che rappresenta l’area fuori dallo schermo
  wrapper: {
    flex: 1,
    backgroundColor: "#888",
    justifyContent: "center",
    alignItems: "center",
  },
  // “schermo” vero e proprio
  deviceContainer: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: "#fff",
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",

    // ombra (Android + iOS)
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
});
