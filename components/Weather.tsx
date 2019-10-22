import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles'

const Weather = (props) => {
  return (
    <View style={styles.widget}>
      <Text style={styles.themedText}>This is Weather</Text>
    </View>
  )
}

export default Weather
