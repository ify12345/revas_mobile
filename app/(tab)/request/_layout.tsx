import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Request = () => {
  return (
    <Stack>
        <Stack.Screen name="message"  options={{ headerShown: false }}  />
    </Stack>
  )
}

export default Request

const styles = StyleSheet.create({})