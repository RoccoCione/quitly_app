import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import DeviceFrame from "../screens/DeviceFrame";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SupportScreen() {
  const navigation = useNavigation();

  // State per la modale FAQ
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  // State per la modale chiamata esperto
  const [callModalVisible, setCallModalVisible] = useState(false);

  // Lista delle domande con relative risposte
  const faqs = [
    {
      question: "Come viene calcolata la mia riduzione giornaliera di sigarette?",
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
      question:
        "Cosa succede se ho una ricaduta e fumo più del previsto?",
      answer:
        "Non ti preoccupare: l'app ti aiuta a rientrare nel tuo piano di riduzione senza giudicarti.",
    },
  ];

  // Funzione per contattare un esperto
  const handleContactExpert = () => {
    setCallModalVisible(true);
  };

  // Funzione per mostrare la spiegazione di una domanda
  const handleShowExplanation = (answer) => {
    setModalText(answer);
    setModalVisible(true);
  };

  // Funzione per aprire il sito antifumo
  const handleOpenWebsite = () => {
    Linking.openURL("https://www.salute.gov.it/portale/fumo/homeFumo.jsp");
  };

  return (
    <DeviceFrame>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          {/* Titolo */}
          <Text style={styles.greeting}>Ciao ****,</Text>
          <Text style={styles.subtitle}>hai bisogno di aiuto?</Text>

          {/* Bottone contatta un esperto */}
          <TouchableOpacity
            style={styles.contactButton}
            onPress={handleContactExpert}
          >
            <Text style={styles.contactButtonText}>Contatta un esperto 📞</Text>
          </TouchableOpacity>

          {/* Domande suggerite */}
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

          {/* Link risorse professionali */}
          <TouchableOpacity onPress={handleOpenWebsite}>
            <Text style={styles.link}>Visualizza risorse professionali</Text>
          </TouchableOpacity>
        </ScrollView>

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
                Stai chiamando il numero di prevenzione nazionale per smettere di fumare.
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

        {/* Navbar */}
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeLogged")}>
            <Ionicons name="home-outline" size={24} color="#2E4E45" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Support")}>
            <Ionicons name="headset-outline" size={24} color="#2E4E45" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Stats")}>
            <Ionicons name="bar-chart-outline" size={24} color="#2E4E45" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="settings-outline" size={24} color="#2E4E45" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </DeviceFrame>
  );
}

const styles = StyleSheet.create({
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
   // Per il bottone singolo (OK)
    modalButtonSingle: {
    width: 180,
    paddingVertical: 16,
    borderRadius: 22,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 18,
  },
  confirm: { backgroundColor: "#2E4E45" },
  cancel: { backgroundColor: "#b30000" },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    paddingBottom: 80, // spazio per la navbar
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
  contactButton: {
    backgroundColor: "#2E4E45",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 28,
    marginBottom: 20,
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
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
  },
  arrow: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    fontSize: 16,
    color: "#2E4E45",
    textDecorationLine: "underline",
    marginTop: 10,
  },
});