import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';


import Header from '../../components/Header';
import CategoryCard from '../../components/CategoryCard';
import images from '../../components/Images';

import LanguagePicker from '../../components/LanguagePicker';

class CategoryScreen extends Component {
  constructor(props) {
    super(props);
     this.state = {
      langData: ''

     }
     
}

languageData =(data)=> {

  this.setState({
    langData: data
  })

  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[{
          flex: 0.15,
          shadowColor: 'rgba(0,0,0, .4)',
          shadowOffset: { height: 3, width: 4 },
          shadowOpacity: 1,
          shadowRadius: 1,
          elevation: 2,
        },shadow]}>
          <Header
            topColor={'#b856e0'}
            middelColor={'#a253d2'}
            endColor={'#834fbe'}
            onPressItem='Home'
            navigation={this.props.navigation}
          />
        </View>
        <View style={{ flex: 0.85 }}>
          <ImageBackground source={require('../../assets/thrdScreen.png')}
            style={{
              flex: 1,
             
            }} >
              <View style ={{
                flex: 0.07,
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
              }}>
                <LanguagePicker 
                selectedLang = {this.languageData}
                />
              </View>
            <View style={{
              flex: 0.45,
              flexDirection: 'row',

            }}>
              <View style={[{ flex: 1, margin: '2%', paddingBottom: '1%' }, shadow]}>
                <CategoryCard
                  textContent={'SPACE'}
                  imgSource={images.categoryImages.one}
                  onPressItem='SpaceScreen'
                  languageValue = {this.state.langData}
                  navigation={this.props.navigation} />
              </View>
              <View style={[{ flex: 1, margin: '2%', paddingBottom: '1%' }, shadow]}>
                <CategoryCard
                  textContent={'NATURE'}
                  imgSource={images.categoryImages.two} 
                  onPressItem='NatureScreen'
                  languageValue = {this.state.langData}
                  navigation={this.props.navigation}/>
              </View>

            </View>
            <View style={{ flex: 0.45, flexDirection: 'row' }}>
              <View style={[{ flex: 1, margin: '2%', paddingTop: '1%' }, shadow]}>
                <CategoryCard
                  textContent={'SCIENCE'}
                  imgSource={images.categoryImages.three} 
                  onPressItem='ScienceScreen'
                  languageValue = {this.state.langData}
                  navigation={this.props.navigation}
                  />
              </View>
              <View style={[{ flex: 1, margin: '2%', paddingTop: '1%' }, shadow]}>
                <CategoryCard
                  textContent={'HISTORY'}
                  imgSource={images.categoryImages.forth}
                  onPressItem={'HistoryScreen'}
                  languageValue = {this.state.langData}
                  navigation={this.props.navigation} 
                  />
              </View>

            </View>

          </ImageBackground>
        </View>


      </View>
    )
  }
}

// Later on in your styles..
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
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,

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
export default CategoryScreen;