import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Index = () => {
  return (
   <Stack>
    <Stack.Screen name="home"  options={{ headerShown: false }}  />
    <Stack.Screen name="detail"  options={{ headerShown: false }}  />
   </Stack>
  )
}

export default Index

const styles = StyleSheet.create({})