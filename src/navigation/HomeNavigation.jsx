import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeDrawer from './HomeDrawer'
import { DaliyExpenseProvide } from '../context/dailyExpense'
import ExpenseScreen from '../Screen/ExpenseScreen'
import { Icon } from '@rneui/base'
const TabNavi = createBottomTabNavigator()
const HomeNavigation = () => {
  return (
    <DaliyExpenseProvide>
      <TabNavi.Navigator
        screenOptions={{ headerShown: false }}
      >
        <TabNavi.Screen
          name="HomeTab"
          options={{title:"Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
          component={HomeDrawer}
        />
        <TabNavi.Screen
        options={{
          title:"Transaction History",
          headerShown:true,
          tabBarIcon: ({ color, size }) => (
            <Icon name="transform" size={size} color={color} />
          ),
        }}
        name="ExpenseTab"
        component={ExpenseScreen}
        />
      </TabNavi.Navigator>
    </DaliyExpenseProvide>
  )
}

export default HomeNavigation