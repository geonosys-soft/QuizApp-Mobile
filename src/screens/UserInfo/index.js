import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Platform
} from 'react-native';
import {
    DotIndicator
  } from 'react-native-indicators';

import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { APP_FONT_FAMILY } from '../../config';

import { connect } from 'react-redux';
import { personalMark, allMark } from '../../actions/leadingboard';
import { userDetails } from '../../actions/userdetails';

import { normalize } from '../../Styles/normalize'



class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {

            userName: '',
            email: '',
            imageValue: '',
            appLoading: true,
        }

    }

   async componentDidMount() {


        try {
            const value = await AsyncStorage.getItem('@LogId');
            this.props.userDetails(value)
            console.log("logid", value)
          } catch (error) {
            // Error retrieving data
          }
      

    }

    static getDerivedStateFromProps(nextProps, prevState) {
       
        if(nextProps && nextProps.userdetails && nextProps.userdetails.length !== 0) {

                var user = nextProps.userdetails[0].Name;
                var email = nextProps.userdetails[0].Email;
                var images = nextProps.userdetails[0].Imageurl;

            return {
                userName: user,
                email: email,
                imageValue: images,
                appLoading: false
            }
        }
        else {
            return {
                userName: "",
                email: '',
                imageValue: '',
                appLoading: true
            } 
        
        }
    }


    render() {

        if(this.state.userName === '') {
            return(
                <LinearGradient colors={['#5c499d', '#5588b8', '#4fbdce']} style = {{flex: 1,
                   }}>
               <DotIndicator color='white' />
             </LinearGradient> 
                )
            } else {

        return (
            <LinearGradient colors={['#5c499d', '#5588b8', '#4fbdce']} style={{ flex: 1 }} >
                <View style={{ flex: 1 }}>


                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <ImageBackground source={require('../../assets/settingsMo.png')} style={{

                            width: 360,
                            height: 550,
                            alignSelf: 'flex-end',
                            right: Platform.OS == 'ios'? 20:30

                        }}>
                            <View style={{
                                flex: 0.20,
                                paddingTop: 105,
                                alignSelf: 'flex-start',
                                paddingRight: 130,
                                paddingLeft: 15,
                                flexDirection: 'row'
                            }}
                            >
                                

                             

                                <TouchableOpacity

                                    onPress={() => {
                                        this.props.navigation.goBack()
                                    }}>
                                    <ImageBackground
                                        source={require('../../assets/close.png')} style={{

                                            width: 30,
                                            height: 30,
                                            alignSelf: 'flex-end',
                                            marginLeft: '20%',
                                            top: -3,
                                            
                                        }}></ImageBackground>
                                </TouchableOpacity>
                                <Image 
                                source={{uri: this.state.imageValue}}
                                style={{
                                    width: 80,
                                    height: 80,
                                    resizeMode: Platform.OS == 'ios'? 'cover' :'contain',
                                    borderRadius: 80/2,
                                    left: 50,
                                    bottom: 60,
                                
                                    
                                    
                                }}/>
                            </View>
                            <View style={{ flex: 0.80, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, top: 30 }}>
                                <View style={{
                                    width: '60%',
                                    alignItems: 'center',
                                    borderBottomWidth: 1,
                                    borderColor: '#ffffff',
                                    marginBottom: 20
                                }}>
                                  
                                        <Text style={{
                                            fontSize: 24,
                                            right: 6,
                                            fontFamily: APP_FONT_FAMILY,
                                            color: '#ffffff'
                                        }}>{this.state.userName}</Text>
                                
                                </View>

                                <View style={{
                                    width: '60%',
                                    alignItems: 'center',
                                    borderBottomWidth: 1,
                                    borderColor: '#ffffff',
                                    marginBottom: 20
                                }}>
                                  
                                        <Text style={{
                                            fontSize: 12,
                                            right: 6,
                                            fontFamily: APP_FONT_FAMILY,
                                            color: '#ffffff'
                                        }}>{this.state.email}</Text>
                                
                                </View>






                            </View>
                        </ImageBackground>
                    </View>


                </View>
            </LinearGradient>
        )
    }
}

}

const styles = StyleSheet.create({

    MainContainer: {

        // Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex: 1,
        margin: 10

    },

    item: {
        color: '#7e52a6',
        fontSize: normalize(12),
        height: 30,
        top: 10,
        fontWeight: 'bold'
    },
    itemfirst: {
        color: '#7e52a6',
        fontSize: normalize(12),
        height: 30,
        right: 10,
        top: 10,
        fontWeight: 'bold'
    },
    itemsecond: {
        color: '#7e52a6',
        fontSize: normalize(12),
        height: 30,
        left: 10,
        top: 10,
        fontWeight: 'bold'
    }

});

const mapStateToProps = store => {
    return {

        personal: store.leadingboard.personal,
        allmark: store.leadingboard.allMark,
        userdetails: store.userdetails.userdetials


    }
}

export default connect(mapStateToProps, { personalMark, allMark, userDetails })(UserInfo);