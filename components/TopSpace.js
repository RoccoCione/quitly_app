// components/TopSpace.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TopSpace({ title }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E4E45",
    textAlign: "center",
  },
});
