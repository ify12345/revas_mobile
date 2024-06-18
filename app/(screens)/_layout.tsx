import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Screens = () => {
  return (
   <Stack>
    <Stack.Screen name="listing" options={{ headerShown: false }}  />
    <Stack.Screen name="liveorder" options={{ headerShown: false }}  />
   </Stack>
  )
}

export default Screens

