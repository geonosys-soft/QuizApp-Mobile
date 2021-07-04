import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { APP_FONT_FAMILY } from '../../config';
import AsyncStorage from '@react-native-community/async-storage';


import { connect } from 'react-redux';
import { btnClick } from '../../actions/suond';
import { newgame } from '../../actions/newgame';

class SubmitButton extends Component {

  state ={
    loginId: '',
    newgamer: this.props.gaming
  }

  static navigationOptions =({navigation}) =>( {

  })

   async componentDidMount () {

    try {
      const value = await AsyncStorage.getItem('@LogId');
      this.setState({
        loginId: value
      })
      console.log("logid", value)
    } catch (error) {
      // Error retrieving data
    }
  
  }

  newGame = () => {
    if(this.state.newgamer === 'New_Game') {
      this.props.btnClick()
       this.props.navigation.navigate(this.props.onPressItem)
       if(this.state.loginId !== 'undefined') {
       this.props.newgame(this.state.loginId);
       }

      } else {
        this.props.btnClick()
        this.props.navigation.navigate(this.props.onPressItem)
      }
  }

    render() {
      console.log("ddd", this.state.newgamer)

        return(
          
          <View style={styles.MainContainer}>
         <TouchableOpacity
         onPress={() => {
         this.newGame()

          }}
      
         >
     
            <LinearGradient colors={[this.props.firstColor, this.props.middelColor, this.props.endColor]} style={[styles.linearGradient, shadow]}>
              <View style={{ flex: 0.01, alignItems: 'flex-end',}}>
              <Image source={require('../../assets/btncurve.png')} style={{ width: 50, height: 42}}/>
              </View>
             
              <View style={{
                flex: 0.99, alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={styles.buttonText}>
                  {this.props.name}
              </Text>
              </View>
            </LinearGradient>
            </TouchableOpacity>
          </View>

  
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
    MainContainer: {
        flex: 1
      },
   
      linearGradient: {
       height: 70,
        width: 230,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: '#ffffff',
        
      },
      buttonText: {
        fontSize: 32,
        fontFamily: APP_FONT_FAMILY,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
  });

  const mapStateToProps = store => {
    return {

      playSound:store.sound.playSound,
      stopSound: store.sound.stopSound
  
        
    }
  }

  export default connect(mapStateToProps, {btnClick, newgame })( SubmitButton);