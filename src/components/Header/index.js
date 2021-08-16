import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

import { GoogleSignin } from '@react-native-community/google-signin';
import appleAuth from '@invertase/react-native-apple-authentication'
import { APP_FONT_FAMILY } from '../../config';
import { normalize } from '../../Styles/normalize'

import { connect } from 'react-redux';
import { totalScore } from '../../actions/totalScore';
import { userDetials, googleLogin } from '../../actions/login';


class Header extends Component {

              constructor(props) {
                  super(props);
                  this.state = {
                    totalscore: ''

                  }
                }

         async componentDidMount() {
          if(this.props.newgame && this.props.newgame[0].Result !== 'Success'){
            try {
              const value = await AsyncStorage.getItem('@LogId');
              if (value !== null) {
                // We have data!!
           
                const params = {
                  "logid": value
              }
              this.props.totalScore(params);
              }
            } catch (error) {
              // Error retrieving data
            }
          }

          }

          static getDerivedStateFromProps(nextProps, prevState) {

            if(nextProps && nextProps.total && nextProps.total.length !== 0 && nextProps.total.totalscore){
                   var qustionArray = nextProps.total.totalscore.Score;

                   console.log("score===", qustionArray);

                    return {
                      totalscore: qustionArray
                    }
              
                  } else {
                    return null;
                  }
            
     
    
        }

        signIn =()=> {
   
          GoogleSignin.signIn()
          .then((user)=>{
            var user = user.user;
            console.log("loged ===", user)
            var params = {
              "email": user.email,
              "name": user.givenName,
              "photo": user.photo
            }
            AsyncStorage.setItem('user',params.name)
            this.props.navigation.navigate('SettingsScreen')
      
            this.props.googleLogin(params)
          })
          .catch((err)=> {
            console.log('wrong signin', err)
          })
          .done();
          
          }
          signInApple =(nav) => {
            return appleAuth.performRequest({
              requestedOperation: appleAuth.Operation.LOGIN,
              requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        
            }).then(appleAuthRequestResponse => {
              let { identityToken, email } = appleAuthRequestResponse;
              var params = {
                "email": email,
                "name": null,
                "photo": null,
                "Device":"iOS",
                "Deviceid":DeviceInfo.getDeviceId()
              }
             
              AsyncStorage.setItem('user', identityToken)
        
              this.props.navigation.navigate('SettingsScreen')
        
              this.props.googleLogin(params)
        
            })
          }

          render(){
              return(
                
                  <View style={[{
                      flex: 1,
                      backgroundColor: '#ffffff',
                      shadowColor: 'rgba(0,0,0, .4)',
                      shadowOffset: { height: 1, width: 1 },
                      shadowOpacity: 1,
                      shadowRadius: 1,
                      elevation: 2,
                      },shadow]}>
                      <LinearGradient colors={[this.props.topColor, this.props.middelColor, this.props.endColor ]} style={[styles.linearGradient, shadow ]}>
                        {Platform.OS === 'ios'?
                      <View style={{ flex: 0.05 , alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                          <Image source={ require('../../assets/backArrow.png')} style={{ width: 20, height: 20}} />
                          </TouchableOpacity>
                      </View> : null }
                      <View style={{ flex: 0.30 , alignItems: 'center', justifyContent: 'center'}}>
                        {this.state.totalscore <= 200?
                          <Image source={ require('../../assets/beginer.png')} style={{ width: 70, height: 70}} />:
                          this.state.totalscore <= 400?
                          <View style={{
                            width: 60,
                            height: 60,
                            backgroundColor: 'white',
                            borderRadius: 60/2
                            
                          }}>
                           
                           
                          <Image source={ require('../../assets/bronz.png')} style={{ width: 60, height: 60, resizeMode: 'contain'}} />
                          </View>:
                          this.state.totalscore <= 600?
                          <View style={{
                            width: 60,
                            height: 60,
                            backgroundColor: 'white',
                            borderRadius: 60/2
                            
                          }}>
                          <Image source={ require('../../assets/silver.png')} style={{ width: 60, height: 60, resizeMode: 'contain'}} />
                          </View>:
                          this.state.totalscore < 700 ?
                          <View style={{
                            width: 60,
                            height: 60,
                            backgroundColor: 'white', 
                            borderRadius: 60/2
                            
                          }}>
                          <Image source={ require('../../assets/golden.png')} style={{ width: 60, height: 60, resizeMode: 'contain'}} />
                          </View>:
                          <Image source={ require('../../assets/beginer.png')} style={{ width: 70, height: 70}} />
                          }
                      </View>
                      <View style={{ flex: 0.35, alignItems: 'center', justifyContent: 'center'}}>
                          <ImageBackground source={require('../../assets/scoreBg.png')} style={{ 
                            width: 130,
                             height: 100,
                             justifyContent: 'center',
                             alignItems: 'center'}} >
                            <Text style={{
                              color: '#fff',
                              fontFamily: APP_FONT_FAMILY,
                              fontSize: normalize(14),
                              top: 4
                            }}>{this.state.totalscore}</Text>
                            </ImageBackground>
                      </View>
                      <View style={{ flex: 0.30, alignItems: 'center', justifyContent: 'center'}}>
                          <TouchableOpacity
                          onPress={ async () => {
                            let user = await AsyncStorage.getItem('user');
                            if(user){
                              this.props.navigation.navigate('SettingsScreen');
                            } else {
                         
                              if(Platform.OS === 'ios') {
                                this.signInApple()
                              } else {
                                this.signIn()
                              }
                        
                            }
                            }}>
                          <Image source={require('../../assets/settingsIcon.png')} style={{ width: 70, height: 70}} />
                          </TouchableOpacity>
                      </View>
                
                          </LinearGradient>
                      </View>
            
              )
          }

          }

// Later on in your styles..
const shadow = {
  shadowColor: '#000000',
  shadowRadius: Platform.OS === 'android'? 140 : 140,
  shadowOpacity: Platform.OS === 'android'? 20 : 20,
  elevation: Platform.OS === 'android'? 8 : 8,
  shadowOffset: {width: 0,height: 4}
}
var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      flexDirection: 'row'
     
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });
  const mapStateToProps = store => {
   
    return {
      total: store.totalScore,
      newgame: store.newgame.newgame
    
        
    }
}
export default connect(mapStateToProps, { totalScore, userDetials, googleLogin })(Header)