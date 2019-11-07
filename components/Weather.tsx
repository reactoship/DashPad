import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import getWeather from '../utility/getWeather'
import { weatherConditions } from '../utility/weatherConditions'

const Weather = (props: object) => {
  const [temp, setTemp] = useState(0)
  const [weatherCond, setWeatherCond] = useState('Clear')

  const fetchWeather = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { currTemp, weatherCondition } = await getWeather(position.coords.latitude, position.coords.longitude)
      setTemp(Math.round(currTemp))
      setWeatherCond(weatherCondition)
    })
  }

  useEffect(() => {
    fetchWeather()
    const intervalID = setInterval(fetchWeather, 900000)
    return (() => { clearInterval(intervalID) })
  }, [])

  return (
    <View style={styles.widget}>
      <MaterialCommunityIcons
        size={72}
        name={weatherConditions[weatherCond].icon}
        color={'#fff'}
      />
      <Text style={styles.themedText}>{temp}&deg; F</Text>
      <Text style={styles.themedText}>{weatherConditions[weatherCond].title}</Text>
    </View>
  )
}

export default Weather
