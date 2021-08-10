import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, TouchableOpacity, Text, AppState, Modal, Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { APP_FONT_FAMILY } from '../../config';
import { GoogleSignin } from '@react-native-community/google-signin';
import appleAuth, {
  AppleButton,
  AppleAuthError,
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from '@invertase/react-native-apple-authentication'
import LinearGradient from 'react-native-linear-gradient';
import { normalize } from '../../Styles/normalize'
import { connect } from 'react-redux';
import { googleLogin } from '../../actions/login';
import { play } from '../../actions/suond';
import { stop } from '../../actions/suond';
import { version } from '../../actions/versionupgrade';

import SubmitButton from '../../components/SubmitButton';

import DeviceInfo from 'react-native-device-info'
import OneSignal from 'react-native-onesignal';
import axios from 'axios';
import { unregUser } from '../../actions/login';

class IntroductionScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginStatue: '',
      initialLoading: false,
      isversion: false,
      appState: AppState.currentState,
      appVersion: '',
      mobileVersion: DeviceInfo.getVersion(),
      userdata: ''
    }
    
  }

  

  async componentDidMount() {

   
    AppState.addEventListener('change', this._handleAppStateChange);
       /* O N E S I G N A L   S E T U P */
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId("f07d32b7-0f40-4418-ba00-a2c555930830");
        
  OneSignal.promptForPushNotificationsWithUserResponse(response => {
    console.log("Prompt response:", response);
  });
  OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log("notification: ", notification);
    const data = notification.additionalData
    console.log("additionalData: ", data);
    const button1 = {
       text: "Cancel",
       onPress: () => { notificationReceivedEvent.complete(); },
       style: "cancel"
    };
    const button2 = { text: "Complete", onPress: () => { notificationReceivedEvent.complete(notification); }};
    Alert.alert("Complete notification?", "Test", [ button1, button2], { cancelable: true });
   });
  
   OneSignal.setNotificationOpenedHandler(notification => {
     console.log("OneSignal: notification opened:", notification);
   });
  const deviceState = await OneSignal.getDeviceState();

  this.setState({
      isSubscribed : deviceState.isSubscribed
  });
 
    

    let deviceId = DeviceInfo.getDeviceId();
    console.log("device", deviceId)
    console.log("user data=====", DeviceInfo.getVersion())

    GoogleSignin.configure({

      webClientId: '1057257465177-8gajvcdojop7bbk91cmdqsdtdvagvv5i.apps.googleusercontent.com',
      offlineAccess: false,

    })
    AppState.addEventListener('change', this._handleAppStateChange);

    axios.get(`https://www.quizytime.in/api/QuizApp/GetVersion`)
    .then(res => {
      const persons = res.data[0].VersionNumber;
      if(persons !== DeviceInfo.getVersion()) {
       this.setState({ isversion: true });
      }
    })
    try {
      const user = await AsyncStorage.getItem('user');
      if (user === null) {
        // We have data!!
    
        let deviceId = DeviceInfo.getDeviceId();
        console.log("device",deviceId)
        const params = {
          "id": deviceId
      }
        this.props.unregUser(params)
       
      }
      
    
    } catch (error) {
      // Error retrieving data
    }
    
  }

 

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
 
  }
  
  _handleAppStateChange = (nextAppState) => {
    if (nextAppState !== 'active') {

      this.props.stop()
    } else {

      this.props.play()
    }

    this.setState({ appState: nextAppState });
  }

  signIn =(nav) => {
    GoogleSignin.signIn()
      .then((user) => {
        var user = user.user;
        console.log("loged ===", user)
        var params = {
          "email": user.email,
          "name": user.givenName,
          "photo": user.photo,
          "Device":"Android",
          "Deviceid":DeviceInfo.getDeviceId()
        }
        AsyncStorage.setItem('user', params.name)

        this.props.navigation.navigate(nav)

        this.props.googleLogin(params)
      })
      .catch((err) => {
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
      console.log("param ====", identityToken)
      AsyncStorage.setItem('user', identityToken)

      this.props.navigation.navigate(nav)

      this.props.googleLogin(params)

    })
  }

  render() {
    console.log("check maadu", this.state.appVersion)
    return (
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'cover'
        }}
        source={require('../../assets/loginBg.png')}
      >

        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.10, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 60 }}>
            <TouchableOpacity style={{ flex: 0.50, alignItems: 'flex-start', justifyContent: 'center' }}
              onPress={async () => {
                let user = await AsyncStorage.getItem('user');
                if (user) {
                  this.props.navigation.navigate('LeadingBorder');
                } else {
                  var nav = 'LeadingBorder'
                  this.signIn(nav)
                }

              }}
            >
              <ImageBackground source={require('../../assets/leftbgIcon.png')} style={{ width: 70, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/onetwo.png')} style={{ width: 60, height: 60 }} />
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 0.50, alignItems: 'flex-end', justifyContent: 'center' }}
              onPress={async () => {
                let user = await AsyncStorage.getItem('user');
                if (user) {
                  this.props.navigation.navigate('SettingsScreen');
                } else {
                  var nav = 'SettingsScreen'
                  if(Platform.OS === 'ios') {
                    this.signInApple(nav)
                  } else {
                  this.signIn(nav)
                  }
                }
              }}>
              <ImageBackground source={require('../../assets/iconBg.png')} style={{ width: 70, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/settingsIcon.png')} style={{ width: 70, height: 70 }} />
              </ImageBackground>
            </TouchableOpacity>


          </View>
          <View style={styles.MainContainer}>
            <View style={{ flex: 0.60, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../../assets/QTLOGO.png')} style={{ width: 570, height: 320 }} />
            </View>
              <Text style={{
                color: 'yellow'
              }}>{this.state.userdata}</Text>
            <View style={[{
              flex: 0.40, justifyContent: 'flex-start', alignItems: 'center', shadowColor: 'rgba(0,0,0, .4)',
              shadowOffset: { height: 3, width: 4 },
              shadowOpacity: 1,
              shadowRadius: 1,
              elevation: 2,
            }, shadow]}>

              <SubmitButton
                firstColor='#fd8d18'
                middelColor='#ff7513'
                endColor='#fabd23'
                name='PLAY'
                onPressItem='Home'
                navigation={this.props.navigation}
              />

            </View>

          </View>
          <View style={{ flex: 0.10, justifyContent: 'center', alignItems: 'center'}}>

            <Text style={{
               color: '#ffffff',
               fontFamily: APP_FONT_FAMILY,
               fontSize: normalize(14),
               margin: 5
            }}>{" By signing in, you agree to our"}</Text>
            <View style={{
              borderColor: '#fff',
              borderBottomWidth: 1
            }}>
              <TouchableOpacity onPress={()=>{
                Linking.openURL('https://www.quizytime.in/Privacy');
              }}>
              <Text style={{
                 color: '#ffffff',
                 fontFamily: APP_FONT_FAMILY,
                 fontSize: normalize(14),
                 
              }}>{"Privacy  Policy"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        <Modal
            animationType = {"slide"}
            transparent
            style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}
            visible={this.state.isversion}
            animationInTiming={1200}
            onRequestClose={() => {
         
            }}>
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                 <LinearGradient colors={['#E0E5E0', '#616361', '#060606']} style={{ 
                  width: '85%',
                  height: 260,
                  borderColor: '#000',
                  borderRadius: 12,
                
                   }} >
                <View style={{ flex: 1 }}>
                <View style={{ flex: 0.70, justifyContent: 'center', alignItems: 'center'}}>
                   <Text style={{
                       color: '#ffffff',
                       fontFamily: APP_FONT_FAMILY,
                       fontSize: normalize(22),
                       margin: 10
                   }}>{"QUIZY TIME NEW VERSION AVAILABLE"}</Text>
                </View>
                <View style={{ flex: 0.30, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity 
                onPress={()=>{
                  if(Platform.OS === 'ios'){
                    Linking.openURL('https://apps.apple.com/in/app/quizytime/id1571014722');
                  } else {
                    Linking.openURL('https://play.google.com/store/apps/details?id=com.quizytime');
                  }
                  this.setState({
                    isversion: false
                  })
                }}
                >
                <Image 
                source={require('../../assets/okbtn.png')} 
                style={{ width: 60, height: 60, resizeMode: 'contain' }} />
                </TouchableOpacity>
                </View>
                </View>
                 </LinearGradient>

              </View>
        </Modal> 

      </ImageBackground>
    )
  }
}

const shadow = {
  shadowColor: '#000000',
  shadowRadius: 40,
  shadowOpacity: 0.6,
  elevation: 4,
  shadowOffset: {
    width: 0,
    height: 4
  }
}

let styles = StyleSheet.create({
  MainContainer: {
    flex: 0.80,


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
    playSound: store.sound.playSound,
    stopSound: store.sound.stopSound,
    version: store.versionupgrade

  }
}

export default connect(mapStateToProps, { googleLogin, play, stop, version, unregUser })(IntroductionScreen);
