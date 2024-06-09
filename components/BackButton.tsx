import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon";
import { router } from "expo-router";
import { Image } from "expo-image";

export default function BackButton() {
  return (
    <TouchableOpacity onPress={() => router.back()} style={styles.back}>
      <Image
        style={styles.image}
        source={require("@/assets/images/back.svg")}
      />
      <Text>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  back: {
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 3,
    display:"flex",
    gap:5
  },
  image: {
    height: 10,
    width: 15,
  },
});
