import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles'

const Clock = (props) => {
  return (
    <View style={styles.widget}>
      <Text style={styles.themedText}>This is a Clock</Text>
    </View>
  )
}

export default Clock

