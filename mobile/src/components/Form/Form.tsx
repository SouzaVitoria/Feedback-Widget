import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from "react-native-view-shot";

import { styles } from "./styles";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget/Widget";
import ScreenshotButton from "../ScreenshotButton/ScreenshotButton";
import Button from "../Button/Button";

interface FormProps {
  feedbackType: FeedbackType;
}

export default function Form({ feedbackType }: FormProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({ format: "png", quality: 0.1 })
      .then(uri => setScreenshot(uri))
      .catch(error => console.log(error));
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}> {feedbackTypeInfo.title} </Text>
        </View>
      </View>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />
      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button isLoading={false} />
      </View>
    </View>
  );
}
