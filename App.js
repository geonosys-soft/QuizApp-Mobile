import React, { Component } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

const TOP_COLORS = ['#EF2A2A', '#EF6A2A', '#1BD170', '#22D2E6', '#2A3BEF', '#EF2AD2', '#EF2AD2']
const BOTTOM_COLORS = ['#EF6A2A', '#EFD82A', '#61E822', '#26F084', '#2ADCEF', '#2A3BEF', '#EF2A2A']
export default class App extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      // this.state.animation.setValue(0);
    });
  }
  
  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      shadowColor: '#ffd200',
      shadowOpacity: 0.8,
      shadowRadius: 30,
      outputRange: ["rgba(241,231,103,1)", "rgba(240,222,25,1)"]
    });

    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(99,71,255)", "rgb(255,99,71)" ]
    });

    const boxAnimatedStyles = {
      backgroundColor: boxInterpolation
    };

    const textAnimatedStyles = {
      color: colorInterpolation
    }
    
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, boxAnimatedStyles]}>
            <Animated.Text style={textAnimatedStyles}>Hello Animation!</Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
   
  }
})