import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import SignUpScreen from './src/screens/SignUpScreen'
import LoginScreen from './src/screens/LoginScreen'
// import auth from '@react-native-firebase/auth'

const App = () => {
  return (
    <View>
      {/* <SignUpScreen/> */}
      <LoginScreen/>
    </View>
  )
}

export default App