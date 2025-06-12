import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Feather, Ionicons } from "@expo/vector-icons";
import DeviceFrame from "../screens/DeviceFrame";
import TopSpace from "../components/TopSpace";
import ScreenContainer from "../components/ScreenContainer";
import BottomNavbar from "../components/BottomNavbar";

const CircularProgress = ({
  percentage = 50,
  radius = 40,
  strokeWidth = 8,
  color = "#2E4E45",
}) => {
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.progressWrapper}>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          stroke="#eee"
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={color}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference}, ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${radius}, ${radius}`}
        />
      </Svg>
      <View style={StyleSheet.absoluteFillObject}>
        <View style={styles.progressCenter}>
          <Text style={styles.progressText}>{percentage}%</Text>
        </View>
      </View>
    </View>
  );
};

export default function GoalsScreen() {
  const [objectiveViewMode, setObjectiveViewMode] = useState("giornalieri");
  const [objectiveDropdownVisible, setObjectiveDropdownVisible] =
    useState(false);
  const [dailyGoals, setDailyGoals] = useState([
    { id: 1, label: "Fuma non più di 7 sigarette", completed: true },
    { id: 2, label: "Fai una passeggiata di 3 km", completed: false },
    { id: 3, label: "Bevi 2 litri di acqua", completed: false },
    { id: 4, label: "Spendi al massimo 10$", completed: false },
  ]);
  const [generalGoals, setGeneralGoals] = useState([
    {
      id: 1,
      label: "Riduci le sigarette settimanali sotto 50",
      completed: false,
    },
    { id: 2, label: "Risparmia 100€ al mese", completed: false },
    { id: 3, label: "Fai sport almeno 3 volte a settimana", completed: true },
  ]);
  const currentGoals =
    objectiveViewMode === "giornalieri" ? dailyGoals : generalGoals;
  const completed = currentGoals.filter((g) => g.completed).length;
  const dailyProgress = Math.round((completed / currentGoals.length) * 100);

  const toggleGoal = (id) => {
    const updateGoals = (goals) =>
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      );
    objectiveViewMode === "giornalieri"
      ? setDailyGoals(updateGoals(dailyGoals))
      : setGeneralGoals(updateGoals(generalGoals));
  };

  const [newGoalModalVisible, setNewGoalModalVisible] = useState(false);
  const [newGoalType, setNewGoalType] = useState("giornaliero");
  const [newGoalText, setNewGoalText] = useState("");
  const [goalTypeDropdownVisible, setGoalTypeDropdownVisible] = useState(false);

  return (
    <DeviceFrame>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TopSpace title="Obiettivi" />

        <ScreenContainer>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.progressContainer}>
              <View style={{ alignItems: "center" }}>
                <CircularProgress percentage={75} />
                <Text style={styles.progressLabel}>OBIETTIVI GENERALI</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <CircularProgress percentage={dailyProgress} color="#f5a623" />
                <Text style={styles.progressLabel}>
                  OBIETTIVI {objectiveViewMode.toUpperCase()}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.setGoalsButton}
              onPress={() => setNewGoalModalVisible(true)}
            >
              <Feather name="plus" size={18} color="#fff" />
              <Text style={styles.buttonText}>Imposta obiettivo</Text>
            </TouchableOpacity>

            <View style={styles.goalCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>GIORNO 1 - 2025</Text>
                <TouchableOpacity
                  style={styles.dropdownToggle}
                  onPress={() =>
                    setObjectiveDropdownVisible(!objectiveDropdownVisible)
                  }
                >
                  <Text style={styles.dropdownText}>{objectiveViewMode}</Text>
                  <Ionicons name="chevron-down" size={16} color="#999" />
                </TouchableOpacity>
              </View>

              {currentGoals.map((goal) => (
                <TouchableOpacity
                  key={goal.id}
                  style={styles.goalItem}
                  onPress={() => toggleGoal(goal.id)}
                >
                  <Text style={styles.goalText}>{goal.label}</Text>
                  <Ionicons
                    name={
                      goal.completed ? "checkbox-outline" : "square-outline"
                    }
                    size={22}
                    color="#2E4E45"
                  />
                </TouchableOpacity>
              ))}

              {currentGoals.length < 3 && (
                <View style={styles.motivationalBox}>
                  <Text style={styles.motivationalText}>
                    💪 Continua così! Aggiungi altri obiettivi per migliorarti
                    ogni giorno.
                  </Text>
                </View>
              )}

              {objectiveDropdownVisible && (
                <View style={styles.overlayDropdown}>
                  {["giornalieri", "generali"].map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setObjectiveViewMode(option);
                        setObjectiveDropdownVisible(false);
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            <TouchableOpacity style={styles.exportButton}>
              <Feather name="share-2" size={18} color="#fff" />
              <Text style={styles.buttonText}>Esporta Riepilogo</Text>
            </TouchableOpacity>

            <View style={{ height: 120 }} />
          </ScrollView>
        </ScreenContainer>

        <Modal
          transparent
          visible={newGoalModalVisible}
          animationType="fade"
          onRequestClose={() => setNewGoalModalVisible(false)}
        >
          <View style={styles.modalWrapper}>
            <View style={styles.goalModalBox}>
              <View style={styles.goalModalHeader}>
                <Text style={styles.goalModalTitle}>
                  Riempi il form con il tuo prossimo obiettivo o generalo in
                  automatico
                </Text>
                <TouchableOpacity onPress={() => setNewGoalModalVisible(false)}>
                  <Ionicons name="close" size={20} color="#333" />
                </TouchableOpacity>
              </View>

              <View style={styles.goalModalControls}>
                <TouchableOpacity
                  style={styles.dropdownToggle}
                  onPress={() =>
                    setGoalTypeDropdownVisible(!goalTypeDropdownVisible)
                  }
                >
                  <Text style={styles.dropdownText}>{newGoalType}</Text>
                  <Ionicons name="chevron-down" size={16} color="#999" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    const auto =
                      newGoalType === "giornaliero"
                        ? "Fai stretching per 5 minuti"
                        : "Partecipa a un evento fitness questo mese";
                    setNewGoalText(auto);
                  }}
                >
                  <Ionicons name="refresh" size={20} color="#333" />
                </TouchableOpacity>
              </View>

              {goalTypeDropdownVisible && (
                <View style={styles.overlayDropdown}>
                  {["giornaliero", "generale"].map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setNewGoalType(option);
                        setGoalTypeDropdownVisible(false);
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              <View style={styles.goalModalTextarea}>
                <TextInput
                  placeholder="Scrivi il tuo obiettivo..."
                  value={newGoalText}
                  onChangeText={setNewGoalText}
                  multiline
                  style={styles.goalInput}
                />
              </View>

              <View style={styles.goalModalButtons}>
                <TouchableOpacity
                  style={[styles.confirmBtn, { backgroundColor: "#000" }]}
                  onPress={() => {
                    if (!newGoalText.trim()) return;
                    const newGoal = {
                      id: Date.now(),
                      label: newGoalText,
                      completed: false,
                    };
                    newGoalType === "giornaliero"
                      ? setDailyGoals([...dailyGoals, newGoal])
                      : setGeneralGoals([...generalGoals, newGoal]);
                    setNewGoalText("");
                    setNewGoalModalVisible(false);
                  }}
                >
                  <Text style={styles.confirmText}>Conferma</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.confirmBtn, { backgroundColor: "#B00000" }]}
                  onPress={() => {
                    setNewGoalModalVisible(false);
                    setNewGoalText("");
                  }}
                >
                  <Text style={styles.confirmText}>Annulla</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <BottomNavbar />
      </KeyboardAvoidingView>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  scrollContent: { paddingBottom: 40 },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  progressWrapper: { justifyContent: "center", alignItems: "center" },
  progressCenter: { flex: 1, justifyContent: "center", alignItems: "center" },
  progressText: { fontSize: 16, fontWeight: "bold", color: "#2E4E45" },
  progressLabel: { marginTop: 6, fontSize: 13, color: "#2E4E45" },
  setGoalsButton: {
    flexDirection: "row",
    backgroundColor: "#2E4E45",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 24,
  },
  exportButton: {
    flexDirection: "row",
    backgroundColor: "#2E4E45",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  buttonText: { color: "#fff", marginLeft: 8, fontWeight: "bold" },
  goalCard: { backgroundColor: "#f2f2f2", borderRadius: 14, padding: 16 },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  cardTitle: { fontWeight: "bold", fontSize: 16 },
  dropdownToggle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  dropdownText: { fontSize: 14, marginRight: 4, color: "#333" },
  overlayDropdown: {
    position: "absolute",
    top: 48,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    zIndex: 1000,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dropdownItem: { paddingVertical: 6, paddingHorizontal: 10 },
  dropdownItemText: { fontSize: 14, color: "#333" },
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  goalText: { color: "#2E4E45", flex: 1, flexWrap: "wrap", paddingRight: 10 },
  motivationalBox: {
    backgroundColor: "#E6F2EF",
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  },
  motivationalText: {
    color: "#2E4E45",
    fontSize: 15,
    textAlign: "center",
    fontStyle: "italic",
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  goalModalBox: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },
  goalModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    width: "100%",
  },
  goalModalTitle: { flex: 1, fontSize: 14, fontWeight: "bold", color: "#333" },
  goalModalControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  goalModalTextarea: {
    width: "100%",
    height: 100,
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
    marginVertical: 10,
  },
  goalInput: { padding: 10, height: "100%", textAlignVertical: "top" },
  goalModalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  confirmBtn: {
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  confirmText: { color: "#fff", fontWeight: "bold" },
});
