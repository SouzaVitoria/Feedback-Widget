import React from "react";
import { View, Text } from "react-native";
import Copyright from "../Copyright/Copyright";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";
import Option from "../Option/Option";
import { FeedbackType } from "../Widget/Widget";

interface OptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export default function Options({ onFeedbackTypeChanged }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Deixe o seu feedback </Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <Option
              key={key}
              title={value.title}
              image={value.image}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            />
          );
        })}
      </View>
      <Copyright />
    </View>
  );
}
