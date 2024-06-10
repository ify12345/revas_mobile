/* eslint-disable @typescript-eslint/no-use-before-define */
import { StyleSheet, View, Modal } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import LottieView from 'lottie-react-native'


interface Prop {
  visible: boolean
}

export default function Loader({visible}: Prop) {
  const {colors} = useTheme()


  return (
     <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <LottieView source={require('@/assets/lottie/loader.json')} autoPlay loop style={styles.svg} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 24
  },
  svg: {
    width: 153,
    height: 153
  }
})