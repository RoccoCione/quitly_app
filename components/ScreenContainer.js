// components/ScreenContainer.js
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

export default function ScreenContainer({ children }) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100, // spazio per navbar
    backgroundColor: "#fff",
  },
});
