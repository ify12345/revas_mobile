import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Account = () => {
  return (
    <Stack >
        <Stack.Screen name="profile"  options={{ headerShown: false }}  />
        <Stack.Screen name="editprofile"  options={{ headerShown: false }}  />
        <Stack.Screen name="editrole"  options={{ headerShown: false }}  />
        
    </Stack>
  )
}

export default Account

const styles = StyleSheet.create({})