import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
import DeviceFrame from "../screens/DeviceFrame";
import TopSpace from "../components/TopSpace";
import ScreenContainer from "../components/ScreenContainer";
import BottomNavbar from "../components/BottomNavbar";

export default function StatsScreen({ navigation }) {
  const data = {
    labels: [
      "Gen",
      "Feb",
      "Mar",
      "Apr",
      "Mag",
      "Giu",
      "Lug",
      "Ago",
      "Set",
      "Ott",
      "Nov",
      "Dic",
    ],
    datasets: [{ data: [10, 20, 40, 60, 70, 80, 90, 100, 85, 70, 50, 30] }],
  };

  const barWidth = 17;
  const chartWidth = data.labels.length * barWidth * 3.0;

  return (
    <DeviceFrame>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TopSpace title="Statistiche" />

        <ScreenContainer>
          {/* Grafico */}
          <View style={styles.graphContainer}>
            <Text style={styles.graphTitle}>Giorni senza sigarette</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator>
              <BarChart
                data={data}
                width={chartWidth}
                height={220}
                fromZero
                yAxisSuffix=""
                chartConfig={{
                  backgroundColor: "#fff",
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(46, 78, 69, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  propsForBackgroundLines: { stroke: "#e3e3e3" },
                }}
                verticalLabelRotation={0}
                showBarTops={false}
                flatColor
                segments={5}
                barWidth={barWidth}
                style={{ borderRadius: 12 }}
              />
            </ScrollView>
          </View>

          {/* Box salute e risparmio */}
          <View style={styles.topBoxes}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => navigation.navigate("Salute")}
            >
              <Ionicons name="heart-outline" size={42} color="#2E4E45" />
              <Text style={styles.boxTitle}>Salute</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.box}
              onPress={() => navigation.navigate("Risparmio")}
            >
              <Ionicons name="cash-outline" size={42} color="#2E4E45" />
              <Text style={styles.boxTitle}>Risparmio</Text>
            </TouchableOpacity>
          </View>

          {/* Box obiettivi */}
          <TouchableOpacity
            style={styles.objectiveBox}
            onPress={() => navigation.navigate("Goal")}
          >
            <Ionicons name="trophy-outline" size={42} color="#2E4E45" />
            <Text style={styles.boxTitle}>Obiettivi</Text>
          </TouchableOpacity>
        </ScreenContainer>

        <BottomNavbar />
      </KeyboardAvoidingView>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 14,
    padding: 16,
    width: "100%",
    height: 300,
    marginBottom: 24,
  },
  graphTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#2E4E45",
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
    marginHorizontal: 6,
    paddingVertical: 20,
    borderRadius: 14,
    alignItems: "center",
  },
  boxTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2E4E45",
    marginTop: 8,
  },
  objectiveBox: {
    backgroundColor: "#f5f5f5",
    borderRadius: 14,
    paddingVertical: 22,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
});
