import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Platform, TouchableNativeFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { APP_FONT_FAMILY } from '../../config';
import { normalize } from '../../Styles/normalize'

import { connect } from 'react-redux';
import { btnClick } from '../../actions/suond';


class ModalButton extends Component {

  static navigationOptions = ({ navigation }) => ({

  })

  componentDidMount() {

  }

  render() {
    var count = this.props.counter;
   

    return (

      <View style={styles.MainContainer}>
        <TouchableOpacity
         style={{ width: Platform.OS === 'android' ? 210 : 210, height: Platform.OS === 'android' ? 210 : 210, zIndex: Platform.OS === 'android' ? 1: 0}}
        
          onPress={() => {
            var param = count + 1;
            if (this.props.name !== 'Play again') {
              this.props.nextquest(param)
            }
            this.props.modalstatus(false)
          }}
        >

          <LinearGradient colors={[this.props.firstColor, this.props.middelColor, this.props.endColor]} style={[styles.linearGradient, shadow]}>
            <View style={{ flex: 0.01, alignItems: 'flex-end', }}>
              <Image source={require('../../assets/btncurve.png')} style={{ width: 50, height: 42 }} />
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
  shadowRadius: Platform.OS === 'android' ? 140 : 0,
  shadowOpacity: Platform.OS === 'android' ? 20 : 0,
  elevation: Platform.OS === 'android' ? 8 : 0,
  shadowOffset: { width: 0, height: 4 }
}

let styles = StyleSheet.create({
  MainContainer: {
    flex: 1
  },

  linearGradient: {
    height: 50,
    width: 200,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#ffffff',

  },
  buttonText: {
    fontSize: normalize(14),
    fontFamily: APP_FONT_FAMILY,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

const mapStateToProps = store => {
  return {

    playSound: store.sound.playSound,
    stopSound: store.sound.stopSound


  }
}

export default connect(mapStateToProps, { btnClick })(ModalButton);