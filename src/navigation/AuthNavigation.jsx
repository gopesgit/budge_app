import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeNavigation from './HomeNavigation';
const AuthStack=createStackNavigator();
const AuthNavigation = () => {
  return (
  <AuthStack.Navigator screenOptions={{headerShown:false}}>
    <AuthStack.Screen
    name="HomeNav"
    component={HomeNavigation}
    />
  </AuthStack.Navigator>

    
  )
}

export default AuthNavigation