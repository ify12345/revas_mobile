import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "@/styles/styles";

export default function Message() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 5,
        marginHorizontal: 20,
      }}
    >
      <View style={styles.Top}>
        <Text style={{ fontSize: 25, fontWeight: "600" }}>Requests</Text>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({});
