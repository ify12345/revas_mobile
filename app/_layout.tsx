import React, { useContext, useEffect, useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import { useColorScheme } from "@/hooks/useColorScheme";
import toastConfig from "@/utils/toast";
import "./global.css";
import { AuthProvider, AuthContext } from "@/context/AuthContext";
import { Stack } from "expo-router";
import Screens from "./page";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    lota: require("@/assets/fonts/LotaGrotesqueAlt3Regular.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tab)" />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="role" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
