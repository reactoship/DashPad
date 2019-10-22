import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App () {
  return (
    <View style={styles.container}>
      <Text style={styles.widget}>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.widget}>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.widget}>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.widget}>Open up App.tsx to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
    // backgroundColor: '#fff'
    // alignItems: 'center',
    // alignContent: 'stretch',
    // justifyContent: 'center'
  },
  widget: {
    // flex: 1,
    width: '50%',
    height: '50%',
    backgroundColor: 'green'
  }
})
