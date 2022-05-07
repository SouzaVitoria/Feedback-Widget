import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import successImg from "../../assets/success.png";
import Copyright from "../Copyright/Copyright";

interface SuccessProps {
  onSendAnotherFeedback: () => void;
}

export default function Success({ onSendAnotherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />

      <Text style={styles.title}>Agradecemos o feedback!</Text>

      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
