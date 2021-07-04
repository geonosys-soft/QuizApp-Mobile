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
    ActivityIndicator
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { APP_FONT_FAMILY } from '../../config';

import { connect } from 'react-redux';
import { personalMark, allMark } from '../../actions/leadingboard';

import { normalize } from '../../Styles/normalize'


class AppInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
           

        }

    }

    async componentDidMount() {

       
    }

    static getDerivedStateFromProps(nextProps, prevState) {
            return null;

    }
  

    render() {

            return (
                <LinearGradient colors={['#71bee8', '#b17abe', '#db499f']} style={{ flex: 1 }} >
                    <View style={{ flex: 0.10, top: 40, left: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.pop(1)}>
                            <Image source={require('../../assets/backArrow.png')} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 0.90 }}>
                    <View style={{
                        flex: 0.10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#ffffff',
                            fontFamily: APP_FONT_FAMILY,
                            fontSize: normalize(22),
                            bottom: 10
                        }}>{"Quizy Time"}</Text>
                    </View>
                    <Text style={{
                            color: '#ffffff',
                            fontFamily: APP_FONT_FAMILY,
                            fontSize: normalize(14),
                            margin: 10
                        }}>
                        {`      Quizy time  is a brain boosting application which mainly includes general knowledge.It consists of 4 sections:
                    a)Space
                    b)Science
                    c)Nature
                    d)History

How to play;
The application is divided into 4 sections.each section carries 10 questions .The contestant gets 10 points for each correct answer.Simultaneously, there is reduction of points for each incorrect one.the player lose 10 points for each breakdown.



        Answer the questions provided.Pick the correct one from the 4 possibilities.Train your brain.`}
                    </Text>
                    </View>
                </LinearGradient>
            )
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
        allmark: store.leadingboard.allMark

    }
}

export default connect(mapStateToProps, { personalMark, allMark })(AppInfo);