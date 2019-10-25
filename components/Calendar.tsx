import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles'
import * as calendar from 'expo-calendar'
import * as Permissions from 'expo-permissions'

const Calendar = () => {
  const getCalendar = async () => {
    await Permissions.askAsync('calendar')
    const events = await calendar.getCalendarsAsync('event')
    console.log(events)
  }

  useEffect(() => {
    getCalendar()
  }, [])
  return (
    <View style={styles.widget}>
      <Text style={styles.themedText}>This is a Calendar</Text>
    </View>
  )
}

export default Calendar
