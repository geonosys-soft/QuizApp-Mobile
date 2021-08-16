import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
 Platform,
  Switch

} from 'react-native';
import ToggleSwitch from "toggle-switch-react-native";
import { APP_FONT_FAMILY } from '../../config';
import Modal from 'react-native-modalbox';
import { GoogleSignin } from '@react-native-community/google-signin';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux';
import { play } from '../../actions/suond';
import { stop } from '../../actions/suond';
import { clearScore } from '../../actions/totalScore';

class SettingsScreen extends Component {

  state = {
    modalVisible: true,
    isEnabled: this.props.stopSound.stopSound !== "play"? false: true
  };
  setModalVisible = () => {
    this.setState({ modalVisible: false });
    this.props.navigation.dispatch(StackActions.pop());
  }
  toggleSwitch = (value) => {
    {

      if (value === false) {
        this.props.play()
      } else {
        this.props.stop()
      }
      this.setState({
        isEnabled: !this.state.isEnabled
      })
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../../assets/settingsBg.png')} style={{ flex: 1, width: '100%', height: '100%', }}>
          <Modal
            isOpen={this.state.modalVisible}
            style={{
              // flex: 1,
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(51,51,57,0.8)',
              justifyContent: 'center'
            }}
            // easing={Easing.elastic(0)}
            swipeToClose={false}
            keyboardTopOffset={0}
            animationDuration={1}
            position="center">
            <View style={{ flex: 1, justifyContent: 'center', }}>
              <ImageBackground source={require('../../assets/settingsMo.png')} style={{
                right: Platform.OS == 'ios'? 20:30,
                width: 360,
                height: 550,
                alignSelf: 'flex-end',

              }}>
                <View style={{
                  flex: 0.10,
                  paddingTop: 105,
                  alignSelf: 'flex-start',
                  paddingRight: 130,
                  paddingLeft: 15
                }}
                >

                  <TouchableOpacity

                    onPress={() => {
                      this.setModalVisible()
                    }}>
                    <ImageBackground
                      source={require('../../assets/settingsClose.png')} style={{

                        width: 30,
                        height: 30,
                        alignSelf: 'flex-end',
                        marginLeft: '20%'
                      }}></ImageBackground>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 0.90, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 0 }}>
                  <View style={{
                    width: '60%',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#ffffff',
                    marginBottom: 20
                  }}>
                    <TouchableOpacity 
                    activeOpacity={1}
                    onPress={()=>{
                      this.props.navigation.navigate('AppInfo');
                    }}>
                    <Text style={{
                      fontSize: 24,
                      right:6,
                      fontFamily: APP_FONT_FAMILY,
                      color: '#ffffff'
                    }}>{"APP INFO"}</Text>
                    </TouchableOpacity>
                  </View>
                  
                  {/* <View style={{
                    width: '60%',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#ffffff',
                    marginBottom: 20
                  }}>
                    <TouchableOpacity
                    onPress={() => 
                    {this.props.navigation.navigate('Login')}}>
                      <Text style={{
                        fontSize: 24,
                        fontFamily: APP_FONT_FAMILY,
                        color: '#ffffff'
                      }}>{"LOGIN"}</Text>
                    </TouchableOpacity>
                  </View> */}
                  <View style={{
                    width: '60%',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#ffffff',
                    marginBottom: 20
                  }}>
                    <TouchableOpacity
                    activeOpacity={1}
                    onPress={()=>{
                      this.props.navigation.navigate('UserInfo');
                    }}>
                    <Text style={{
                      fontSize: 24,
                      right: 5,
                      fontFamily: APP_FONT_FAMILY,
                      color: '#ffffff'
                    }}>{"ACCOUNT"}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{
                    width: '60%',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#ffffff',
                    marginBottom: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}>
                    <Text style={{
                      fontSize: 24,
                      fontFamily: APP_FONT_FAMILY,
                      color: '#ffffff',
                      left: 48
                    }}>{"SOUND"}</Text>
                    {/* <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={this.toggleSwitch}
                      value={this.state.isEnabled}
                    /> */}
                    <ToggleSwitch
                      isOn={this.state.isEnabled}   
                      onColor="#81b0ff"
                      offColor="#767577"
                      // onToggle={this.toggleSwitch}
                      onToggle={isEnabled => {
                        this.setState({ isEnabled });
                        this.toggleSwitch(isEnabled);
                      }}
                    />
                  </View>
                  <View style={{
                    width: '60%',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#ffffff',
                    marginBottom: 20
                  }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('PrivacyPolicy');

                      }}>
                      <Text style={{
                        fontSize: 24,
                        right: 10,
                        fontFamily: APP_FONT_FAMILY,
                        color: '#ffffff'
                      }}>{"PRIVACY POLICY"}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{
                    width: '60%',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#ffffff'
                  }}>
                    <TouchableOpacity
                      onPress={async () => {
                        try {
                         
                          await GoogleSignin.signOut();
                          await AsyncStorage.removeItem('user')
                          this.props.navigation.pop();
                          this.props.clearScore();
                        } catch (error) {
                          console.error(error);
                        }

                      }}>
                      <Text style={{
                        fontSize: 24,
                        right: 10,
                        fontFamily: APP_FONT_FAMILY,
                        color: '#ffffff'
                      }}>{"SIGNOUT"}</Text>
                    </TouchableOpacity>
                  </View>


                </View>
              </ImageBackground>
            </View>
          </Modal>
        </ImageBackground>
      </View>
    )
  }

}

const mapStateToProps = store => {
  return {

    playSound: store.sound.playSound,
    stopSound: store.sound


  }
}

export default connect(mapStateToProps, { play, stop, clearScore })(SettingsScreen);

