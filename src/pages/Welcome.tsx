import React from 'react'
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'

import wateringImg from '../assets/watering.png'

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="light-content" />

      <Text>Manage your plants the easy way</Text>

      <Image source={wateringImg} />

      <Text>
        Don't forget to water your plants. 
        We will keep you in touch whenever you need
      </Text>

      <TouchableOpacity>
        <Text>
          Go
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})