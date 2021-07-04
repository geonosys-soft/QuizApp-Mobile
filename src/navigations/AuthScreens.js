import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const AuthStack = createStackNavigator();

export function AuthScreens () {

    return(
      <AuthStack.Navigator>
      <AuthStack.Screen
      name="Login"
      component={Login}
      options={{
        title: null,
        headerTransparent: true,
        headerShown: false
      }}
      />
       <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        title: null,
          headerTransparent: true,
        headerTintColor: '#000'
      }}
      />
      </AuthStack.Navigator>
    )
  }