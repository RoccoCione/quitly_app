import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import DeviceFrame from "../screens/DeviceFrame";
import TopSpace from "../components/TopSpace";
import ScreenContainer from "../components/ScreenContainer";
import BottomNavbar from "../components/BottomNavbar";

export default function SupportScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");
  const [callModalVisible, setCallModalVisible] = useState(false);

  const faqs = [
    {
      question:
        "Come viene calcolata la mia riduzione giornaliera di sigarette?",
      answer:
        "La riduzione giornaliera viene calcolata in base al tuo piano di riduzione personalizzato all'interno dell'app.",
    },
    {
      question: "Come posso vedere i benefici ottenuti fino ad oggi?",
      answer:
        "Puoi monitorare i tuoi progressi nella sezione 'Statistiche' dell'app, dove vengono mostrati i miglioramenti di salute.",
    },
    {
      question: "Come posso personalizzare i miei obiettivi?",
      answer:
        "Vai alla sezione 'Obiettivi' e scegli l'obiettivo più adatto a te: riduzione graduale o smettere subito.",
    },
    {
      question: "Com’è il supporto psicologico offerto dall’app?",
      answer:
        "L'app ti offre supporto tramite articoli motivazionali, audio di rilassamento e contatti con esperti.",
    },
    {
      question: "Cosa succede se ho una ricaduta e fumo più del previsto?",
      answer:
        "Non ti preoccupare: l'app ti aiuta a rientrare nel tuo piano di riduzione senza giudicarti.",
    },
  ];

  const handleContactExpert = () => {
    setCallModalVisible(true);
  };

  const handleShowExplanation = (answer) => {
    setModalText(answer);
    setModalVisible(true);
  };

  const handleOpenWebsite = () => {
    Linking.openURL("https://www.salute.gov.it/portale/fumo/homeFumo.jsp");
  };

  return (
    <DeviceFrame>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TopSpace title="Supporto" />
        <ScreenContainer>
          <View style={styles.fixedContainer}>
            <Text style={styles.subtitle}>Hai bisogno di aiuto?</Text>

            <TouchableOpacity
              style={styles.contactButton}
              onPress={handleContactExpert}
            >
              <Feather name="phone-call" size={20} color="#fff" />
              <Text style={styles.contactButtonText}>Contatta un esperto</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Domande suggerite</Text>

            <View style={styles.faqBox}>
              {faqs.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.faqItem}
                  onPress={() => handleShowExplanation(item.answer)}
                >
                  <Text style={styles.faqText}>{item.question}</Text>
                  <Text style={styles.arrow}>{">"}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity onPress={handleOpenWebsite}>
              <Text style={styles.link}>Visualizza risorse professionali</Text>
            </TouchableOpacity>
          </View>
        </ScreenContainer>

        {/* Modale FAQ */}
        <Modal
          transparent
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalWrapper}>
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>{modalText}</Text>
              <TouchableOpacity
                style={[styles.modalButtonSingle, styles.confirm]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modale chiamata esperto */}
        <Modal
          transparent
          visible={callModalVisible}
          animationType="fade"
          onRequestClose={() => setCallModalVisible(false)}
        >
          <View style={styles.modalWrapper}>
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>
                Stai chiamando il numero di prevenzione nazionale per smettere
                di fumare.
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancel]}
                  onPress={() => setCallModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Annulla</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.confirm]}
                  onPress={() => {
                    setCallModalVisible(false);
                    Linking.openURL("tel:800554088");
                  }}
                >
                  <Text style={styles.modalButtonText}>Conferma</Text>
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
  fixedContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 80,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E4E45",
    marginBottom: 16,
    textAlign: "center",
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E4E45",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginBottom: 20,
    gap: 10,
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  faqBox: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 12,
    marginBottom: 20,
  },
  faqItem: {
    backgroundColor: "#e0e0e0",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqText: {
    fontSize: 16,
    flexShrink: 1,
    color: "#2E4E45",
  },
  arrow: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
  link: {
    fontSize: 16,
    color: "#2E4E45",
    textDecorationLine: "underline",
  },
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
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: "center",
  },
  modalButtonSingle: {
    width: 180,
    paddingVertical: 16,
    borderRadius: 22,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 18,
  },
  confirm: {
    backgroundColor: "#2E4E45",
  },
  cancel: {
    backgroundColor: "#b30000",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
