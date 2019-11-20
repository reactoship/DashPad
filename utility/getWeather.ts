import { OpenWeatherKey } from './ApiKeys'

const getWeather = async (latitude: number, longitude: number) => {
  try {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${OpenWeatherKey}&units=imperial`)
    const data = await res.json()
    const weather = {
      currTemp: data.main.temp,
      weatherCondition: data.weather[0].main
    }
    return weather
  } catch (err) {
    console.error(err)
  }
}

export default getWeather
