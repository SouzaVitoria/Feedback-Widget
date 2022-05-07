import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text,
} from "react-native";
import { styles } from "./styles";

interface OptionsProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export default function Options({ title, image, ...rest }: OptionsProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}> {title} </Text>
    </TouchableOpacity>
  );
}
