import React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import * as Clipboard from 'expo-clipboard';

export default function ModalPassword({ senhaGerada ,handleCloseModal}) {

  const handleCopyPassword = async () => {
    await Clipboard.setStringAsync(senhaGerada);
    console.log("Senha Copiada!")
    handleCloseModal();
  }
  return (
    <View style={styles.container}>
     
     
      <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada:</Text>
        <Pressable style={styles.generated_password}  onLongPress={handleCopyPassword}>
          <Text style={styles.generated_password_text}>{senhaGerada}</Text>
        </Pressable>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={[styles.button, styles.buttonBack]}>
            <Text style={styles.btnText} onPress={handleCloseModal}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.btnText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(24,24,24,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#fff",
    width: "90%",
    paddingTop: 24,
    paddingBottom: 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
  },
  generated_password: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingStart: 14,
    marginTop: 35,
    marginBottom: 35,
    borderRadius: 8,
    backgroundColor: "#000",
    width: "77%",
    height: 50,
  },
  generated_password_text: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  buttonArea: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height: 50,
    borderRadius: 15,
  },
  buttonBack: {
    backgroundColor: "#d32f2f",
  },
  buttonSave: {
    backgroundColor: "#1f46b1",
  },
  btnText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
