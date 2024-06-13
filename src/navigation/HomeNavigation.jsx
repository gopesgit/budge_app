import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeDrawer from './HomeDrawer'
const TabNavi=createBottomTabNavigator()
const HomeNavigation = () => {
  return (
    <TabNavi.Navigator 
    screenOptions={{headerShown:false}}
    >
        <TabNavi.Screen
        name="HomeTab"
        component={HomeDrawer}
        />
    </TabNavi.Navigator>
  )
}

export default HomeNavigation