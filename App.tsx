import React from 'react'
import { View } from 'react-native'
import styles from './Styles'
import Clock from './components/Clock'
import Calendar from './components/Calendar'
import Traffic from './components/Traffic'
import Weather from './components/Weather'

export default function App () {
  console.log('where are you')
  return (
    <View style={styles.container}>
      <Clock />
      <Calendar />
      <Traffic />
      <Weather />
    </View>
  )
}
