import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProgressChart } from "react-native-chart-kit";

import DeviceFrame from "../screens/DeviceFrame";
import TopSpace from "../components/TopSpace";
import ScreenContainer from "../components/ScreenContainer";
import BottomNavbar from "../components/BottomNavbar";

const { width } = Dimensions.get("window");

const INFO = {
  polmoni: {
    title: "Cosa significa?",
    text:
      "Smettere di fumare permette ai polmoni di iniziare un processo di pulizia: le ciglia bronchiali ricrescono, migliorando la rimozione di muco e tossine. Dopo alcune settimane, la capacità polmonare aumenta e il rischio di infezioni respiratorie diminuisce sensibilmente.",
  },
  corpo: {
    title: "Cosa significa?",
    text:
      "Le performance fisiche migliorano perché il sangue trasporta più ossigeno e meno monossido di carbonio. Il metabolismo si regolarizza, la massa muscolare può aumentare e la sensazione di affaticamento diminuisce, favorendo una vita più attiva.",
  },
  detox: {
    title: "Cosa significa?",
    text:
      "La disintossicazione è il processo con cui il corpo elimina le sostanze nocive accumulate con il fumo. Dopo circa 2 mesi, la maggior parte delle tossine viene espulsa, i polmoni si rigenerano e il rischio di malattie legate al fumo si riduce drasticamente.",
  },
};

export default function HealthScreen({ navigation, daysWithoutSmoking }) {
  const days = typeof daysWithoutSmoking === "number" ? daysWithoutSmoking : 10;
  const detoxPercentage = Math.min(days / 60, 1);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: "", text: "" });

  const openModal = (infoKey) => {
    setModalInfo(INFO[infoKey]);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalInfo({ title: "", text: "" });
  };

  return (
    <DeviceFrame>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TopSpace title="Salute" />

        <ScreenContainer>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.header}>
              Ciao ****,{"\n"}ecco come sta migliorando la tua salute!
            </Text>

            {/* Card Polmoni */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="heart-outline" size={40} color="#2E4E45" />
                <TouchableOpacity onPress={() => openModal("polmoni")}>
                  <Ionicons name="information-circle-outline" size={26} color="#2E4E45" />
                </TouchableOpacity>
              </View>
              <Text style={styles.cardTitle}>Benefici ai polmoni</Text>
              <Text style={styles.cardText}>• Polmoni più puliti del 45% dopo 2 settimane</Text>
              <Text style={styles.cardText}>• Bronchi più efficienti del 50%</Text>
              <Text style={styles.cardText}>• Senso di affanno limitato dopo 2 settimane</Text>
            </View>

            {/* Card Corpo */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="walk-outline" size={40} color="#2E4E45" />
                <TouchableOpacity onPress={() => openModal("corpo")}>
                  <Ionicons name="information-circle-outline" size={26} color="#2E4E45" />
                </TouchableOpacity>
              </View>
              <Text style={styles.cardTitle}>Benefici alle performance fisiche</Text>
              <Text style={styles.cardText}>• Sei dimagrito di 2kg nelle ultime tre settimane</Text>
              <Text style={styles.cardText}>• La massa muscolare del tuo corpo è aumentata del 15%</Text>
            </View>

            {/* Card Detox */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="leaf-outline" size={40} color="#2E4E45" />
                <TouchableOpacity onPress={() => openModal("detox")}>
                  <Ionicons name="information-circle-outline" size={26} color="#2E4E45" />
                </TouchableOpacity>
              </View>
              <Text style={styles.cardTitle}>Disintossicazione e pulizia dei polmoni</Text>
              <View style={styles.progressCircle}>
                <ProgressChart
                  data={{ data: [detoxPercentage] }}
                  width={width * 0.7}
                  height={120}
                  strokeWidth={12}
                  radius={40}
                  chartConfig={{
                    backgroundColor: "#fff",
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(224, 212, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  }}
                  hideLegend
                />
              </View>
              <Text style={styles.percentageText}>
                {`${Math.round(detoxPercentage * 100)}%`}
              </Text>
            </View>
          </ScrollView>
        </ScreenContainer>

        <BottomNavbar />

        {/* Modal centrata e contenuta */}
        <Modal
          transparent
          visible={modalVisible}
          animationType="fade"
          onRequestClose={closeModal}
        >
          <View style={styles.modalWrapper}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>{modalInfo.title}</Text>
              <Text style={styles.modalText}>{modalInfo.text}</Text>
              <TouchableOpacity onPress={closeModal} style={styles.modalButtonSingle}>
                <Text style={styles.modalButtonText}>Chiudi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: "center",
    padding: 20,
    paddingBottom: 80,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2E4E45",
  },
  card: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E4E45",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: "#333",
    marginBottom: 4,
  },
  progressCircle: {
    alignItems: "center",
    marginVertical: 10,
  },
  percentageText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E4E45",
  },
  // MODALE STILE SUPPORT
  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 24,
    width: 280,
    minHeight: 180,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E4E45",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 18,
    textAlign: "center",
    paddingHorizontal: 6,
  },
  modalButtonSingle: {
    width: 180,
    paddingVertical: 14,
    borderRadius: 22,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#2E4E45",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});