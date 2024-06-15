import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeDrawer from './HomeDrawer'
import { DaliyExpenseProvide } from '../context/dailyExpense'
import ExpenseScreen from '../Screen/ExpenseScreen'
const TabNavi = createBottomTabNavigator()
const HomeNavigation = () => {
  return (
    <DaliyExpenseProvide>
      <TabNavi.Navigator
        screenOptions={{ headerShown: false }}
      >
        <TabNavi.Screen
          name="HomeTab"
          component={HomeDrawer}
        />
        <TabNavi.Screen
        name="ExpenseTab"
        component={ExpenseScreen}
        />
      </TabNavi.Navigator>
    </DaliyExpenseProvide>
  )
}

export default HomeNavigation