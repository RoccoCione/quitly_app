import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
import DeviceFrame from "./DeviceFrame";

const screenWidth = Dimensions.get("window").width;
const barWidth = 17; // o 14 per più sottile

export default function StatsScreen({ navigation }) {
  const data = {
    labels: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
    datasets: [
      {
        data: [10, 20, 40, 60, 70, 80, 90, 100, 85, 70, 50, 30],
      },
    ],
  };

  const chartWidth = data.labels.length * barWidth * 3.0;

  return (
    <DeviceFrame>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.container}>
          {/* Titolo */}
          <Text style={styles.greeting}>Ciao ****,</Text>
          <Text style={styles.subtitle}>ecco i tuoi progressi!</Text>

          {/* Box in alto */}
          <View style={styles.topBoxes}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => navigation.navigate("Salute")}
            >
              <Text style={styles.boxTitle}>Salute</Text>
              <Ionicons name="heart-outline" size={48} color="#2E4E45" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() => navigation.navigate("Risparmio")}
            >
              <Text style={styles.boxTitle}>Risparmio</Text>
              <Ionicons name="cash-outline" size={48} color="#2E4E45" />
            </TouchableOpacity>
          </View>

          {/* Grafico */}
          <View style={styles.graphContainer}>
            <Text style={styles.graphTitle}>Giorni senza sigarette</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
              <BarChart
                data={data}
                width={chartWidth}
                height={200}
                fromZero
                yAxisSuffix=""
                chartConfig={{
                  backgroundColor: "#fff",
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(46, 78, 69, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: { borderRadius: 16 },
                  propsForBackgroundLines: { stroke: "#e3e3e3" },
                }}
                verticalLabelRotation={0}
                showBarTops={false}
                flatColor={true}
                segments={5}
                barWidth={barWidth}
                style={{ borderRadius: 12 }}
              />
            </ScrollView>
          </View>

          {/* Box obiettivi */}
          <TouchableOpacity
            style={styles.objectiveBox}
            onPress={() => navigation.navigate("Obiettivi")}
          >
            <Text style={styles.boxTitle}>Obiettivi</Text>
            <Ionicons name="trophy-outline" size={48} color="#2E4E45" />
          </TouchableOpacity>
        </ScrollView>

        {/* Navbar */}
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
    alignItems: "center",
    padding: 20,
    paddingBottom: 80,
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  topBoxes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  box: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    alignItems: "center",
    borderRadius: 12,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  graphContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 5,
    width: "100%",
    height: 300,
    marginBottom: 20,
    alignItems: "stretch",
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    alignSelf: "flex-start",
    color: "#2E4E45",
  },
  objectiveBox: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 20,
    width: "100%",
    alignItems: "center",
    marginBottom: 5,
    marginTop: "auto",
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