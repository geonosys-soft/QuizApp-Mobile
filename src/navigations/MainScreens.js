import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import IntroductionScreen from '../screens/IntroductionScreen';
import CategoryScreen from '../screens/CategoryScreen';
import SpaceScreen from '../screens/SpaceScreen';
import SpaceMainScreen from '../screens/SpaceMainScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LeadingBorder from '../screens/LeadingBorder';
import NatureMainScreen from '../screens/NatureMainScreen';
import ScienceMainScreen from '../screens/ScienceMainScreen';
import HistoryMainScreen from '../screens/HistoryMainScreen';
import SuccessScreen from '../screens/SuccessScreen';
import UserInfo from '../screens/UserInfo';
import AppInfo from '../screens/AppInfo';
import PrivacyPolicy from '../screens/PrivacyPolicy';

const MainStack = createStackNavigator();

export function MainStackNavigator() {
    return (
      <MainStack.Navigator>
               <MainStack.Screen 
      name="IntroductionScreen" 
      component={IntroductionScreen} 
      options={{ title: null,
        headerTransparent: true }}
      />
        <MainStack.Screen 
        name="Home" 
        component={Home}
        options={{ title: null,
        headerTransparent: true,
      headerTintColor: '#000' }} 
        />
        <MainStack.Screen 
        name="CategoryScreen" 
        component={CategoryScreen} 
        options={{ title: null,
            headerTransparent: true,
            headerLeft: null }}
        />
        <MainStack.Screen 
        name="SpaceScreen" 
        component={SpaceMainScreen} 

        headerTitle = {null}
        options={{ title: null,
            headerTransparent: true,
            headerTitle :null,
            headerLeft: null,
           }}
        />
         <MainStack.Screen 
        name="NatureScreen" 
        component={NatureMainScreen} 

        headerTitle = {null}
        options={{ title: null,
            headerTransparent: true,
            headerTitle :null,
            headerLeft: null,
           }}
        />
         <MainStack.Screen 
        name="ScienceScreen" 
        component={ScienceMainScreen} 

        headerTitle = {null}
        options={{ title: null,
            headerTransparent: true,
            headerTitle :null,
            headerLeft: null,
           }}
        />
         <MainStack.Screen 
        name="HistoryScreen" 
        component={HistoryMainScreen} 

        headerTitle = {null}
        options={{ title: null,
            headerTransparent: true,
            headerTitle :null,
            headerLeft: null,
           }}
        />
        <MainStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: null,
          headerTransparent: true,
          headerShown: false
        }}
        />
        <MainStack.Screen
        name="LeadingBorder"
        component={LeadingBorder}
        options={{
          title: null,
          headerTransparent: true,
          headerShown: false
        }}
        />
        <MainStack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{
          title: null,
          headerTransparent: true,
          headerShown: false
        }}
        />
         <MainStack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          title: null,
          headerTransparent: true,
          headerShown: false
        }}
        />
         <MainStack.Screen
        name="AppInfo"
        component={AppInfo}
        options={{
          title: null,
          headerTransparent: true,
          headerShown: false
        }}
        />
         <MainStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          title: null,
          headerTransparent: true,
          headerShown: false
        }}
        />
      </MainStack.Navigator>
    );
  }