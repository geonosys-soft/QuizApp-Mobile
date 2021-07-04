import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Platform

} from 'react-native';
import { APP_FONT_FAMILY } from '../../config';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';
import { categoryList } from '../../actions/categorylist';
import { createLogin } from '../../actions/login';


class Login extends Component {

    state = {
        username: '',
        password: ''
     }

     componentDidMount() {
      this.props.categoryList();
  
     }

     handleEmail = (text) => {
        this.setState({ username: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }

    loginActivity =(username,password)=> {

        var params = {
            username: username,
            password: password
        }

        this.props.createLogin(params);

        this.props.navigation.navigate('Home')
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
                        height: '100%' 
                        }}>
                            <View style={{
                                flex: 0.20,
                                alignItems: 'center',
                                justifyContent: "flex-start",
                                marginTop: 40
                             
                            }}>
                              <Image 
                        source={require('../../assets/userIcon.png')} 
                        style={{ 
                            width: 120, 
                            height: 100,
                            
                            }} 
                            />

                            <Text style={{
                                  fontSize: 24,
                                  fontFamily: APP_FONT_FAMILY,
                                  color: '#ffffff',
                            }}>SIGN IN</Text>
                            </View>
                            <View style={{
                                flex: 0.30,
                                marginTop: 50
                            }}>
                                    <View style={{
                                        flex: 0.50,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{
                                            flex: 0.10,
                                            justifyContent: 'flex-end',
                                            alignItems: 'flex-end'
                                        }}>
                                        <Image 
                                          source={require('../../assets/nameIcon.png')} 
                                          style={{ 
                                              width: 50, 
                                              height: 50,
                                              marginRight: 10
                                              
                                              }} 
                                        />
                                          </View>
                                        <TextInput 
                                           placeholder={"User name"}
                                           placeholderTextColor="#ffffff" 
                                           autoCapitalize = "none"
                                           onChangeText = {this.handleEmail}
                                        style={{
                                            flex: 0.55,
                                            height: 40,
                                            borderColor: '#ffffff',
                                            borderWidth: 1.5,
                                            borderRadius: 20,
                                            paddingLeft: 10
                                        }}
                                        />


                                    </View>
                                    <View style={{
                                        flex: 0.50,
                                      
                                    }}>
                                        <View style={{
                                            flex:0.80,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                        }}>
                                      
                                              <View style={{
                                            flex: 0.10,
                                            justifyContent: 'flex-end',
                                            alignItems: 'flex-end'
                                        }}>
                                        <Image 
                                          source={require('../../assets/passwordIcon.png')} 
                                          style={{ 
                                              width: 50, 
                                              height: 50,
                                              marginRight: 10
                                              
                                              }} 
                                        />
                                          </View>
                                        <TextInput 
                                        placeholder={"Password"}
                                        placeholderTextColor="#ffffff" 
                                        autoCapitalize = "none"
                                        onChangeText = {this.handlePassword}
                                        style={{
                                            flex: 0.55,
                                            height: 40,
                                            borderColor: '#ffffff',
                                            borderWidth: 1.5,
                                            borderRadius: 20,
                                            paddingLeft: 10
                                        }}
                                        />

                                    </View>
                                    <View style={{
                                            flex:0.20,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                        }}>
                                            <View style={{
                                                flex: 1,
                                                alignItems: 'flex-end'
                                            }}>
                                            <Text style={{
                                                color: '#ffffff'
                                            }}
                                            >remember me</Text>
                                            </View>
                                            <View style={{
                                                flex: 1,
                                                alignItems: 'center'
                                            }}>
                                            <Text
                                            style={{
                                                color: '#ffffff'
                                            }}
                                            >forget password</Text>
                                            </View>
                                            
                                          
                                            </View>
                                    </View>


                            </View>
                            <View style={{
                                flex: 0.20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>

                            <View style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                marginLeft: 40,
                               
                                
                            }}>
                                <TouchableOpacity 
                                onPress={() => { 
                                    this.loginActivity(this.state.username, this.state.password)
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

                                        }}>Login</Text>
                                    </LinearGradient>
                                    </TouchableOpacity>
                           
                            </View>
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                marginRight: 40,
                                
                            }}>
                                <Text style={{
                                    fontSize: 8,
                                    color: '#a62e76',
                                    fontWeight: 'bold'
                                }}>dont have account </Text>
                                    <TouchableOpacity
                                        onPress={() => { this.props.navigation.navigate('SignUp') }}
                                    >
                                <Text style={{
                                    fontSize: 10,
                                    color: '#ffffff',
                                    fontWeight: 'bold'
                                }}>SIGN UP</Text>
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
 
       height: 40,
        width: 110,
        paddingLeft: 5,
        paddingRight: 5,
        // marginLeft: 30,
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

 export default connect(mapStateToProps, { createLogin,
    categoryList })(Login);