import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, TouchableOpacity, Text, Platform } from 'react-native';
import { APP_FONT_FAMILY } from '../../config';
import AsyncStorage from '@react-native-community/async-storage';

import SubmitButton from '../../components/SubmitButton';
import DeviceInfo from 'react-native-device-info'

import { connect } from 'react-redux';
import { unregUser } from '../../actions/login';
import { totalScore } from '../../actions/totalScore';
import { newgame } from '../../actions/newgame';

class Home extends Component {
  
  componentDidMount() {

    // try {
    //   const user = await AsyncStorage.getItem('user');
    //   if (user === null) {
    //     // We have data!!
    
    //     let deviceId = DeviceInfo.getDeviceId();
    //     console.log("device",deviceId)
    //     const params = {
    //       "id": deviceId
    //   }
    //     this.props.unregUser(params)
       
    //   }
      
    
    // } catch (error) {
    //   // Error retrieving data
    // }
    this.totalScoreData()
  }

  totalScoreData = async ()=> {
    var value = await AsyncStorage.getItem('@LogId');
     
    if (value !== null) {
      // We have data!!
     
      const params = {
        "logid": value
    }
    this.props.totalScore(params);
    }
    

  }

    render() {

        return(
            <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/mainBg.png')}
            >
            <View style={styles.MainContainer}>
              <View style={{ flex: 0.50, alignItems: 'center', justifyContent: 'flex-end'}}>
              <Image source={require('../../assets/QTLOGO.png')} style={{ width: 470, height: 300}} />
              </View>
            <View style={{ flex: 0.50 }}>
            {/* <TouchableOpacity style={{ flex: 0.20 }}>
              <Image source={require('../../assets/QTBTNCAT.png')} style={{ width: 225, height: 80 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 0.20 }} >
              <Image source={require('../../assets/QTBTNMULTI.png')} style={{ width: 225, height: 80 }} />
              </TouchableOpacity> */}
               <View style={[{ flex: 0.20, margin: 13, padding: Platform.OS === 'android'? 10: 0 }, shadow]}>
              <SubmitButton
              firstColor='#eb4e40'
              middelColor='#fc7251'
              endColor='#fc7251'
              name='CATEGORY'
              onPressItem='CategoryScreen'
              navigation={this.props.navigation}
               />
              </View>
              {/* <View style={[{ flex: 0.20, margin: 13, padding: Platform.OS === 'android'? 10: 0 }, shadow]}>
              <SubmitButton
              firstColor='#eb4e40'
              middelColor='#fc7251'
              endColor='#fc7251'
              name='MULTI PLAYER' />
              </View> */}
              <View style={[{ flex: 0.20, margin: 13, padding: Platform.OS === 'android'? 10: 0 }, shadow]}>
              <SubmitButton
              firstColor='#fd8d18'
              middelColor='#ff7513'
              endColor='#fabd23'
              name='NEW GAME' 
              onPressItem='CategoryScreen'
              navigation={this.props.navigation}
              gaming={'New_Game'}
              />
              </View>
      
            </View>
  
         
             
              
            </View>

          </ImageBackground>
        )
    }
}
const shadow = {
  shadowColor: '#000000',
  shadowRadius: Platform.OS === 'android'? 0 : 10,
  shadowOpacity: Platform.OS === 'android'? 0 : 0.6,
  elevation: Platform.OS === 'android'? 0 : 8,
  shadowOffset: {width: 0,height: 4}
}
let styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      TextStyle: {
        color: '#0250a3',
        textAlign: 'center',
        fontFamily: APP_FONT_FAMILY,
        fontSize: 30,
        marginTop: 10,
      },
  });
  const mapStateToProps = store => {
    return {
      loginStatus: store.login,
      newgame: store.newgame.newgame
        
    }
  }
  
export default connect(mapStateToProps, { unregUser,totalScore, newgame })(Home);
