import React, { useState } from 'react'
import { TextInput, View, Button, AsyncStorage, KeyboardAvoidingView, Text } from 'react-native'
import { Input } from 'react-native-elements'
import slugAddress from '../utility/slugAddress'
import styles from '../Styles'
import { Formik } from 'formik'

const EnterWorkAddress = (props) => {
  const { setWorkAddress, setHomeAddress, setChangeLocationFlag, workAddress, homeAddress } = props
  return (
    <Formik
      initialValues={{ workAddress, homeAddress }}
      onSubmit={async (values) => {
        const newWorkAddress = values.workAddress
        const newHomeAddress = values.homeAddress
        setWorkAddress(newWorkAddress)
        setHomeAddress(newHomeAddress)
        await AsyncStorage.setItem('workAddress', newWorkAddress)
        await AsyncStorage.setItem('homeAddress', newHomeAddress)
        setChangeLocationFlag(false)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <KeyboardAvoidingView behavior={'padding'} style={{ width: '100%' }}>
          <Input
            // style={styles.themedText}
            placeholder={'work address'}
            placeholderTextColor={'grey'}
            onChangeText={handleChange('workAddress')}
            onBlur={handleBlur('workAddress')}
            value={values.workAddress}
            // containerStyle={{ backgroundColor: 'white', alignSelf: 'center' }}
            label={'work address'}
            inputStyle={{ textAlign: 'center', ...styles.themedText, fontSize: 40 }}

          />
          <Input
            // style={styles.themedText}
            placeholder={'home address'}
            placeholderTextColor={'grey'}
            onChangeText={handleChange('homeAddress')}
            onBlur={handleBlur('homeAddress')}
            value={values.homeAddress}
            label={'home address'}
            inputStyle={{ textAlign: 'center', ...styles.themedText, fontSize: 40 }}
          />
          <Button onPress={handleSubmit} title={'submit'}/>
        </KeyboardAvoidingView>
      )}
    </Formik>
  )
}

export default EnterWorkAddress
