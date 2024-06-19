import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DashBoard = () => {
  return (
   <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }}  />
    <Stack.Screen name="listing" options={{ headerShown: false }}  />
    <Stack.Screen name="liveorder" options={{ headerShown: false }}  />
   </Stack>
  )
}

export default DashBoard;

