import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DeviceFrame from "../screens/DeviceFrame";
import TopSpace from "../components/TopSpace";
import ScreenContainer from "../components/ScreenContainer";
import BottomNavbar from "../components/BottomNavbar";

export default function LanguageScreen() {
  const [selected, setSelected] = useState("it");

  const languages = [
    { code: "it", label: "Italiano" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
  ];

  return (
    <DeviceFrame>
      <TopSpace title="Lingua" />
      <ScreenContainer>
        <View style={styles.container}>
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              style={[
                styles.option,
                selected === lang.code && styles.optionSelected,
              ]}
              onPress={() => setSelected(lang.code)}
            >
              <Text
                style={[
                  styles.optionText,
                  selected === lang.code && styles.optionTextSelected,
                ]}
              >
                {lang.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScreenContainer>
      <BottomNavbar />
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  option: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#EAEAEA",
  },
  optionSelected: {
    backgroundColor: "#2E4E45",
  },
  optionText: {
    fontSize: 16,
    color: "#2E4E45",
    fontWeight: "bold",
  },
  optionTextSelected: {
    color: "#fff",
  },
});
