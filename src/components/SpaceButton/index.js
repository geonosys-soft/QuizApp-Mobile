import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { APP_FONT_FAMILY } from '../../config';

import { connect } from 'react-redux';
import {
  
  questions
} from '../../actions/questions';
import { btnClick, correctAnsCli, wrongAnsCli } from '../../actions/suond';
import { totalScore,sumbitAnswer } from '../../actions/totalScore';
import { normalize } from '../../Styles/normalize'
import { cos } from 'react-native-reanimated';

var count = 1;
class SpaceButton extends Component {

  state = {
    animation: new Animated.Value(0),
    anim: false, 
    
  };

  componentDidMount() {

  }


  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps && nextProps.total && nextProps.total.length !== 0 && nextProps.total.totalscore) {
      var qustionArray = nextProps.total.totalscore.Score;
      return qustionArray

    }

  }


  startAnimation = () => {
    this.props.btnClicker()
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(async () => {
      try {

        console.log("nmarker", this.props.nmarkValue)
        const value = await AsyncStorage.getItem('@LogId');
        if (value !== null) {
          // We have data!!



          this.state.animation.setValue(0);
          var mark = this.props.makerValue;
          var nmark = this.props.nmarkValue;
          var trueAns = this.props.correctAns;
          var userId = value;
          if (this.props.name == trueAns) {
            const params = {
              "CatID": this.props.catID,
              "LogID": userId,
              "Score": mark
            }
            this.props.sumbitAnswer(params)
            const paramD = {
              "logid": value
            }
            this.props.correctAnsCli();
            this.props.totalScore(paramD);
            var param = count++;
            this.props.nextquest(param)
            this.props.correctans(true, param)
          } else {
            const params = {
              "CatID": this.props.catID,
              "LogID": userId,
              "Score": -nmark
            }
            const paramD = {
              "logid": value
            }
            this.props.wrongAnsCli();
            this.props.totalScore(paramD);
            console.log("wrong ans params ====", params)
            this.props.sumbitAnswer(params);
            this.props.wrongans(true) 
          
          }
        }
      } catch (error) {
        // Error retrieving data
      }

    });

    this.setState({
      anim: true
    })

    this.props.clickeD(this.props.name);
  }

  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      shadowColor: '#ffd200',
      shadowOpacity: 0.8,
      shadowRadius: 30,
      outputRange: this.props.name === this.props.correctAns ? ["#eb6022", "#14A20B"] : ["#eb6022", "#5F0E0A"]
    });

    const boxAnimatedStyles = {
      backgroundColor: boxInterpolation
    };
    console.log("lali", this.props.name)
    return (

      <View style={styles.MainContainer}>
        {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[this.props.firstColor, this.props.middelColor, this.props.endColor]} style={[styles.linearGradient, shadow]}> */}
        <TouchableOpacity onPress={this.startAnimation} style={[{}]}>
          <Animated.View style={[{
            height: 60,
            width: 230,
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 15,
            borderWidth: 1.5,
            borderColor: '#eb6022'
          }, boxAnimatedStyles]}>
            <View style={{ flex: 0.01, alignItems: 'flex-end', }}>
              <Image source={require('../../assets/btncurve.png')} style={{ width: 50, height: 42 }} />
            </View>
            <View style={{
              flex: 0.99,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={styles.buttonText}>
                {this.props.name}
              </Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
        {/* </LinearGradient> */}
        
      </View>


    )
  }
}
const shadow = {
  shadowColor: '#000000',
  shadowRadius: Platform.OS === 'android' ? 140 : 0,
  shadowOpacity: Platform.OS === 'android' ? 20 : 0,
  elevation: Platform.OS === 'android' ? 8 : 0,
  elevation: 3,
  shadowOffset: { width: 0, height: 4 }
}
let styles = StyleSheet.create({
  MainContainer: {
    flex: 1
  },

  linearGradient: {



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
    allquestions: store.questions,
    total: store.totalScore,

  }
}

export default connect(mapStateToProps, { sumbitAnswer, totalScore, questions, btnClick, correctAnsCli, wrongAnsCli })(SpaceButton);