import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const EditProfile = () => {
  return (
    <Stack>
      <Stack.Screen name="roledit" options={{ headerShown: false }} />
    </Stack>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
