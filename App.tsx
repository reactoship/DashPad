import React from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import styles from './Styles'
import Clock from './components/Clock'
import Calendar from './components/Calendar'
import Traffic from './components/Traffic'
import Weather from './components/Weather'

export default function App () {
  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
      <Clock />
      <Calendar />
      <Traffic />
      <Weather />
    </KeyboardAvoidingView >
  )
}
