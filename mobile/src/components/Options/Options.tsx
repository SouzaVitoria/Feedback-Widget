import React from "react";
import { View, Text } from "react-native";
import Copyright from "../Copyright/Copyright";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";
import Option from "../Option/Option";

export default function Options() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Deixe o seu feedback </Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return <Option key={key} title={value.title} image={value.image} />;
        })}
      </View>
      <Copyright />
    </View>
  );
}
