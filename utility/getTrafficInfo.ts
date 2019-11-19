import { googleKey } from './ApiKeys'

const getTrafficInfo = async (
  origin: string = '99-45+67+road+forest+hills+NY ',
  destination: string = '5+Hanover+Square+New+York+NY',
  travelType: 'driving' | 'walking' | 'bicycling' | 'transit' = 'transit'
) => {
  const googleMapsEndPoint: string = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${googleKey}&mode=${travelType}`
  try {
    const response = await fetch(googleMapsEndPoint)
    const data = await response.json()
    console.log('data:', data)
    return data.rows[0].elements[0].duration.text
  } catch (err) {
    console.log(err)
  }
}

export default getTrafficInfo
