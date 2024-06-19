import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react'
import HomeNavigation from './HomeNavigation';
import Login from '../Screen/Login';
import Register from '../Screen/Register';
import { AuthContext } from '../context/authContex';
const AuthStack = createStackNavigator();
const AuthNavigation = () => {
  const { user } = useContext(AuthContext)
  console.log(user);
  const login=user.userId==null ? false:true
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      {!login ?
        <>
          <AuthStack.Screen
            name="Login"
            component={Login}
          />
          <AuthStack.Screen
            name="Register"
            component={Register}
          />
        </>
      :
        <AuthStack.Screen
          name="HomeNav"
          component={HomeNavigation}
        />
      }
    </AuthStack.Navigator>


  )
}

export default AuthNavigation