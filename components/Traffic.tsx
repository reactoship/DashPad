import React, { useEffect, useState } from 'react'
import { View, Text, AsyncStorage, Button } from 'react-native'
import styles from '../Styles'
import useLocation from '../hooks/useLocation'
import EnterWorkAddress from './EnterWorkAdress'
import getTrafficInfo from '../utility/getTrafficInfo'
import slugAddress from '../utility/slugAddress'

const Traffic = () => {
  const { long, lat } = useLocation()
  const [homeAddress, setHomeAddress] = useState('')
  const [workAddress, setWorkAddress] = useState('')
  const [timeToWork, setTimeToWork] = useState('')
  const [changeLocationFlag, setChangeLocationFlag] = useState(false)

  useEffect(() => {
    const getWorkLocation = async () => {
      try {
        const savedWorkAddress = await AsyncStorage.getItem('workAddress')
        const savedHomeAddress = await AsyncStorage.getItem('homeAddress')
        if (savedWorkAddress) {
          // setChangeLocationFlag(false)
          setWorkAddress(savedWorkAddress)
        }
        if (savedHomeAddress) {
          // setChangeLocationFlag(false)
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
      const slugHomeAddress = slugAddress(homeAddress)
      const slugWorkAddress = slugAddress(workAddress)
      setTimeToWork(await getTrafficInfo(slugHomeAddress, slugWorkAddress))
    }
    getTraffic()

  }, [homeAddress, workAddress])

  const clearAddresses = () => {
    setChangeLocationFlag(true)
  }

  return (
    <View style={styles.widget}>
      {!changeLocationFlag ?
        (<View>
        <Text style={styles.themedText}>
          {timeToWork} to get to Work
        </Text>
          <Button title='reset location' onPress={clearAddresses} />
          </View>
          )
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
    </View>

  )
}

export default Traffic
