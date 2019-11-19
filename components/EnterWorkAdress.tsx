import React, { useState } from 'react'
import { TextInput, View, Button, AsyncStorage } from 'react-native'
import slugAddress from '../utility/slugAddress'
import styles from '../Styles'
import { Formik } from 'formik'

const EnterWorkAddress = (props) => {
  const { setWorkAddress, setHomeAddress, setChangeLocationFlag, workAddress, homeAddress } = props
  return (
    <Formik
      initialValues={{ workAddress, homeAddress }}
      onSubmit={async (values) => {
        const newWorkAddress = slugAddress(values.workAddress)
        const newHomeAddress = slugAddress(values.homeAddress)
        setWorkAddress(newWorkAddress)
        setHomeAddress(newHomeAddress)
        await AsyncStorage.setItem('workAddress', newWorkAddress)
        await AsyncStorage.setItem('homeAddress', newHomeAddress)
        setChangeLocationFlag(false)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ backgroundColor: 'white' }}>
          <TextInput
            // style={styles.themedText}
            placeholder={'work address'}
            placeholderTextColor={'grey'}
            onChangeText={handleChange('workAddress')}
            onBlur={handleBlur('workAddress')}
            value={values.workAddress}
          />
          <TextInput
            // style={styles.themedText}
            placeholder={'home address'}
            placeholderTextColor={'grey'}
            onChangeText={handleChange('homeAddress')}
            onBlur={handleBlur('homeAddress')}
            value={values.homeAddress}
          />
          <Button onPress={handleSubmit} title={'what'}/>
        </View>
      )}
    </Formik>
  )
}

export default EnterWorkAddress
