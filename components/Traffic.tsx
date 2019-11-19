import React, { useEffect, useState } from 'react'
import { View, Text, AsyncStorage, Button } from 'react-native'
import styles from '../Styles'
import useLocation from '../hooks/useLocation'
import EnterWorkAddress from './EnterWorkAdress'
import getTrafficInfo from '../utility/getTrafficInfo'

const Traffic = () => {
  const { long, lat } = useLocation()
  const [homeAddress, setHomeAddress] = useState()
  const [workAddress, setWorkAddress] = useState('')
  const [timeToWork, setTimeToWork] = useState('')
  const [changeLocationFlag, setChangeLocationFlag] = useState(false)
  useEffect(() => {
    const getWorkLocation = async () => {
      try {
        const savedWorkAddress = await AsyncStorage.getItem('workAddress')
        const savedHomeAddress = await AsyncStorage.getItem('homeAddress')
        if (savedWorkAddress) {
          setChangeLocationFlag(false)
          setWorkAddress(savedWorkAddress)
        }
        if (savedHomeAddress) {
          setChangeLocationFlag(false)
          setHomeAddress(savedHomeAddress)
        }

      } catch (err) {
        console.log(err)
      }
    }
    getWorkLocation()
  }, [])

  useEffect(() => {
    const getTraffic = async () => {
      setTimeToWork(await getTrafficInfo(homeAddress, workAddress))
    }
    getTraffic()

  }, [homeAddress, workAddress])

  const clearAddresses = () => {
    setChangeLocationFlag(true)
  }

  return (
    <View style={styles.widget}>
      {!changeLocationFlag ?
        <Text style={styles.themedText}> {timeToWork} to get to Work</Text>
        : (
        <EnterWorkAddress
          setWorkAddress={setWorkAddress}
          setHomeAddress={setHomeAddress}
          setChangeLocationFlag={setChangeLocationFlag}
          workAddress={workAddress}
          homeAddress={homeAddress}
        />
        )
      }
      <Button title='reset location' onPress={clearAddresses} />
    </View>

  )
}

export default Traffic
