import { Geolocation } from 'react-native'
import { useState } from 'react'

const useLocation = () => {
  const [long, setLong] = useState(0)
  const [lat, setLat] = useState(0)
  navigator.geolocation.getCurrentPosition((position) => {
    setLong(position.coords.longitude)
    setLat(position.coords.latitude)
  })

  return { long, lat }
}

export default useLocation
