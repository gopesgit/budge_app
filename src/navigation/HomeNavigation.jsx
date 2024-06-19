import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeDrawer from './HomeDrawer'
import { DaliyExpenseProvide } from '../context/dailyExpense'
import ExpenseScreen from '../Screen/ExpenseScreen'
import { Icon } from '@rneui/base'
import HomeScreen from '../Screen/HomeScreen'
import AddCRDRType from '../Screen/AddCRDRType'
import Header from '../componet/Header'
const TabNavi = createBottomTabNavigator()
const HomeNavigation = () => {
  return (
    <DaliyExpenseProvide>
      <TabNavi.Navigator
        screenOptions={{
          headerRight:()=><Header/>
        }}
      >
        <TabNavi.Screen
          name="HomeTab"
          options={{title:"Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
            headerShown:true,
          }}

          component={HomeScreen}
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
        <TabNavi.Screen
        options={{
          title:"Fund",
          headerShown:true,
          tabBarIcon: ({ color, size }) => (
            <Icon name="currency-rupee" size={size} color={color} />
          ),
        }}
        name="Add Fund Type"
        component={AddCRDRType}
        />
      </TabNavi.Navigator>
    </DaliyExpenseProvide>
  )
}

export default HomeNavigation