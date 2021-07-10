import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { APP_FONT_FAMILY } from '../../config';

class CategoryCard extends Component {

render(){
    var lang = this.props.languageValue;
    return(
       
        <TouchableOpacity 
        onPress={() => {this.props.navigation.navigate(this.props.onPressItem,{language: lang})}}
        style={{
            flex: 1
        }}>
            <ImageBackground source={this.props.imgSource}
            style={{ flex: 1, width: '100%', height: '100%' }}>
                <View style={{ flex: 0.92, justifyContent: 'flex-end', paddingLeft: 22}}>
                    <Text style={styles.textStyle}>{this.props.textContent}</Text>

                </View>
            </ImageBackground>
            </TouchableOpacity>
   
    )
}

}
var styles = StyleSheet.create({
   textStyle: {
    fontSize: 18,
    fontFamily: APP_FONT_FAMILY,
   }
  });

export default CategoryCard;