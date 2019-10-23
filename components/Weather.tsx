import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const API_KEY: string = 'a1a4d8eb15fe259cccfab6c13328be1b'
const getWeather = async (latitude: number, longitude: number) => {
  const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=imperial`)
  const data = await res.json()
  const weather = {
    currTemp: data.main.temp,
    weatherCondition: data.weather[0].main
  }
  return weather
}

export const weatherConditions = {
  Rain: {
    color: '#005BEA',
    title: 'Raining',
    subtitle: 'Get a cup of coffee',
    icon: 'weather-rainy'
  },
  Clear: {
    color: '#f7b733',
    title: 'Sunny',
    subtitle: 'It is hurting my eyes',
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    color: '#616161',
    title: 'A Storm is coming',
    subtitle: 'Because Gods are angry',
    icon: 'weather-lightning'
  },
  Clouds: {
    color: '#1F1C2C',
    title: 'Clouds',
    subtitle: 'Everywhere',
    icon: 'weather-cloudy'
  },

  Snow: {
    color: '#00d2ff',
    title: 'Snow',
    subtitle: 'Get out and build a snowman for me',
    icon: 'weather-snowy'
  },
  Drizzle: {
    color: '#076585',
    title: 'Drizzle',
    subtitle: 'Partially raining...',
    icon: 'weather-hail'
  },
  Haze: {
    color: '#66A6FF',
    title: 'Haze',
    subtitle: 'Another name for Partial Raining',
    icon: 'weather-hail'
  },
  Mist: {
    color: '#3CD3AD',
    title: 'Mist',
    subtitle: "Don't roam in forests!",
    icon: 'weather-fog'
  }
}

const Weather = (props: object) => {
  const [temp, setTemp] = useState(0)
  const [weatherCond, setWeatherCond] = useState('Clear')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { currTemp, weatherCondition } = await getWeather(position.coords.latitude, position.coords.longitude)
      setTemp(currTemp)
      setWeatherCond(weatherCondition)
    })
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
