import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform

} from 'react-native';
import { APP_FONT_FAMILY } from '../../config';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { connect } from 'react-redux';
import { signUp } from '../../actions/login';


class SignUp extends Component {

    constructor(props) {
        super(props);
         this.state = {
            email: '',
            username: '',
            password: '',
            confirmPass:''

         }
    }

    handleEmail = (text) => {
        this.setState({ email: text })
     }

     handleUsername = (text) => {
         this.setState({
             username: text
         })
     }

     handlePassword = (text) => {
        this.setState({ password: text })
     }

     handleConfirmPass = (text) => {
         this.setState({
             confirmPass: text
         })
     }

    signupActivity = (email, user, passwrd, confirmpass) => {

        if (passwrd.localeCompare(confirmpass) === 0) {

            const params = {
                email: email,
                password: passwrd,
                username: user
            }

            this.props.signUp(params);
            this.props.navigation.navigate('Login')
        } else {

        }
    }

    render() {
        return(
         
          

                <LinearGradient colors={['#488ae2', '#934ae5', '#cc19e8']}
                    style={{ flex: 1}}>
                        <ScrollView>
                        <View style={{ 
                            flexGrow: 0.20, 
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 90
                            }}>
                        <Image 
                        source={require('../../assets/QTLOGO.png')} 
                        style={{ 
                            width: 370, 
                            height: 220 
                            }} 
                            />

                        </View>
                        <View style={{ flexGrow: 0.80, 
                            justifyContent:'flex-start',
                            alignItems:'center',
                            height: 500
                          
                         }}>
                          
                             <ImageBackground
                        source={require('../../assets/userbgd3.png')} 
                        style={{ 
                       flex: 1,
                        width: '100%', 
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 90
                            }}>

                            
                            <View style={{
                                flex: 0.15,
                                margin: 10
                             
                            }}>
                                   
                                       
                                        <TextInput 
                                           placeholder={"User name"}
                                           placeholderTextColor="#ffffff" 
                                           autoCapitalize = "none"
                                           onChangeText = {this.handleUsername}
                                        style={{
                                           width: 170,
                                            height: 40,
                                            borderColor: '#ffffff',
                                            borderWidth: 1.5,
                                            borderRadius: 20,
                                            paddingLeft: 10
                                        }}
                                        />


                                    </View>
                                    <View style={{
                                         flex: 0.15,
                                         margin: 10
                                    }}>
                                      
                                            
                                        <TextInput 
                                        placeholder={"Email"}
                                        placeholderTextColor="#ffffff" 
                                        autoCapitalize = "none"
                                        onChangeText = {this.handleEmail}
                                        style={{
                                            width: 170,
                                            height: 40,
                                            borderColor: '#ffffff',
                                            borderWidth: 1.5,
                                            borderRadius: 20,
                                            paddingLeft: 10
                                        }}
                                        />
                                 
                                    
                                    </View>

                                    <View style={{
                                flex: 0.15,
                                margin: 10
                              
                            }}>
                                 
                                       
                                        <TextInput 
                                           placeholder={"password"}
                                           placeholderTextColor="#ffffff" 
                                           autoCapitalize = "none"
                                           onChangeText = {this.handlePassword}
                                        style={{
                                            width: 170,
                                            height: 40,
                                            borderColor: '#ffffff',
                                            borderWidth: 1.5,
                                            borderRadius: 20,
                                            paddingLeft: 10
                                        }}
                                        />


                                    
                                    </View>
                                    <View style={{
                                flex: 0.15,
                                margin: 10
                           
                            }}>
                                   
                                       
                                        <TextInput 
                                           placeholder={"Confirm password"}
                                           placeholderTextColor="#ffffff" 
                                           autoCapitalize = "none"
                                           onChangeText = {this.handleConfirmPass}
                                        style={{
                                            width: 170,
                                            height: 40,
                                            borderColor: '#ffffff',
                                            borderWidth: 1.5,
                                            borderRadius: 20,
                                            paddingLeft: 10
                                        }}
                                        />


                            
                                    </View>

                                        </View>
                          
                            <View style={{
                                flex: 0.30,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: 60
                            }}>

                            <View style={{
                                flex: 1,
                             
                        
                               
                                
                            }}>
                                  <TouchableOpacity 
                                onPress={() => { 
                                    this.signupActivity(this.state.email,
                                        this.state.username, 
                                        this.state.password,
                                        this.state.confirmPass)
                                 }}
                                >
                                    <LinearGradient colors={['#c520e7', '#8656e5', '#4f86e2']} 
                                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                    style={[styles.linearGradient, shadow]}>
                                        <Text style={{
                                            color: '#ffffff',
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            fontSize: 12,
                                            fontWeight: 'bold'

                                        }}>SIGN UP</Text>
                                    </LinearGradient>
                                    </TouchableOpacity>
                            </View>
                          
                        
                            </View>
                           
                   </ImageBackground>
                        </View>
                        </ScrollView>
                      
                </LinearGradient>

            
              
                                
                                
     
                 
        )
    }

}

const shadow = {
    shadowColor: '#000000',
    shadowRadius: Platform.OS === 'android'? 140 : 0,
    shadowOpacity: Platform.OS === 'android'? 20 : 0,
    elevation: Platform.OS === 'android'? 8 : 0,
    shadowOffset: {width: 0,height: 4}
  }

  let styles = StyleSheet.create({
    container: {
        flex: 1
      },
      linearGradient: {
          justifyContent: 'center',
          alignItems: 'center',
 
       height: 40,
        width: 110,
    
        borderRadius: 30,
        shadowColor: '#000000',
        shadowRadius: 140,
        shadowOpacity:  20,
        elevation: 8,
        shadowOffset: {width: 0,height: 4}
        
      }
    }
      )
const mapStateToProps = store => {
        return {
          loginStatus: store.login,
          categorys: store.catagoryList
            
        }
    }
export default connect(mapStateToProps, { signUp })(SignUp);