import React from "react";
import { Stack } from "expo-router";
import { useAppSelector } from "@/redux/store";

const AppNavigator = () => {
  const { isAuthenticated } = useAppSelector((store) => store.auth);

  console.log(isAuthenticated);
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="role" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </>
      ) : (
        <>
         <Stack.Screen name="(tab)"  />
        </>
      )}
    </Stack>
  );
};

export default AppNavigator;
