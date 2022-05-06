import React from "react";
import { View } from "react-native";
import Copyright from "../Copyright/Copyright";
import { styles } from "./styles";

export default function Options() {
  return (
    <View style={styles.container}>
      <Copyright />
    </View>
  );
}
