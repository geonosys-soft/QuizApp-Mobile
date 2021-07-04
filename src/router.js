import React,{useEffect} from 'react';
import { Image, View } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer,  } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { version } from './actions/versionupgrade';

import {AuthScreens} from './navigations/AuthScreens';
import {MainStackNavigator} from './navigations/MainScreens';
import SplashScreen from 'react-native-splash-screen'



const route =(props) => {

  useEffect ( () => {
    SplashScreen.hide();
    // props.version()
  }, []);
  return (
    <NavigationContainer>
      <MainStackNavigator />
      
    </NavigationContainer>
  );
}
const mapStateToProps = store => {
  return {
    loginStatus: store.login,

  }
}

export default connect(mapStateToProps, {version})(route);



