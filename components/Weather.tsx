import React, { useEffect, useState } from 'react'
import { View, Text, Geolocation } from 'react-native'
import styles from '../Styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import getWeather from '../utility/getWeather'
import { weatherConditions } from '../utility/weatherConditions'

const Weather = (props: object) => {
  const [temp, setTemp] = useState(0)
  const [weatherCond, setWeatherCond] = useState('Clear')
  const [locationEnabled, setLocationEnabled] = useState(false)

  const fetchWeather = () => {
    // Geolocation.requestAuthorization()

    navigator.geolocation.getCurrentPosition(async (position) => {
      setLocationEnabled(true)
      const { currTemp, weatherCondition } = await getWeather(position.coords.latitude, position.coords.longitude)
      console.log('currTemp:', currTemp)
      setTemp(Math.round(currTemp))
      setWeatherCond(weatherCondition)
    }, (e) => {
      console.log('enable permissions')
      console.log('e:', e)
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
