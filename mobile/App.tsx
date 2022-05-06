import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Widget } from "./src/components/Widget/Widget";
import { theme } from "./src/theme";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Widget />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
