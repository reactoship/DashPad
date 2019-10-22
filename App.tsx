import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Clock from './components/Clock'
import Calendar from './components/Calendar'
import Traffic from './components/Traffic'
import Weather from './components/Weather'

export default function App () {
  return (
    <View style={styles.container}>
      <Clock style={styles.widget}/>
      <Calendar style={styles.widget}/>
      <Traffic style={styles.widget}/>
      <Weather style={styles.widget}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
  },
  widget: {
    width: '50%',
    height: '50%',
    backgroundColor: 'green'
  }
})
