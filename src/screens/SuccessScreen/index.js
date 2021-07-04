import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    Platform,
    Modal,
    Alert
  } from 'react-native';

  import LinearGradient from 'react-native-linear-gradient';
  import { APP_FONT_FAMILY } from '../../config';

  import { connect } from 'react-redux';
  import { successClap } from '../../actions/suond';
  
  import Header from '../../components/Header';
  import SpaceButton from '../../components/SpaceButton';
  import ModalButton from '../../components/ModalButton';
  import { normalize } from '../../Styles/normalize'

  var qustionArray = [];
  var question, optionA, optionB, optionC, optionD, correctAns, mark,nmark, answerStatus;
  //var count= 0;
  var data;
  var wrongAnsData = 0

  class SuccessScreen extends Component {

    constructor(props) {
        super(props);
         this.state = {
           
             

         }
         
    }

    componentDidMount() {
        this.props.successClap()
        setTimeout(() => {
        
            this.props.navigation.pop(2)
            }, 4000);

    }

   

   


    static getDerivedStateFromProps(nextProps, prevState) {
       

    }


    render() {
      
        return(
            <View style={{ flex: 1 }}>
                <View style={[{
                    flex: 0.15,
                    backgroundColor: '#ffffff',
                }, shadow ]}>
                   
                    <Header
                        topColor={'#4699ad'}
                        middelColor={'#3992b4'}
                        endColor={'#2d86b2'}
                        onPressItem='CategoryScreen'
                        navigation={this.props.navigation}
                    />
                </View>
                <LinearGradient colors={['#64b9b1', '#46a0b5', '#1068af']} style={{ flex: 0.85}}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                    source={require('../../assets/completed.png')}
                    style = {{
                        width: '80%',
                        height: '80%',
                        resizeMode: 'contain',
                        top: 90
                    }}
                    />
                </View>
                <View style={{ flex: 1}}>
                    <Image 
                    source={require('../../assets/clap.png')}
                    style = {{
                        width: '100%',
                        height: 350,
                        resizeMode: 'stretch'
                    }}
                    />

                </View>
                    
              </LinearGradient>
          
            </View>
        )
    }
  }

  const shadow = {
    shadowColor: Platform.OS === 'android'?'#000000': '#000000',
    shadowRadius: Platform.OS === 'android'? 40 : 40,
    shadowOpacity: Platform.OS === 'android'? 20 : 20,
    elevation: Platform.OS === 'android'? 8 : 8,
    shadowOffset: {width: 0,height: 4}
  }
  const shadowSB = {
    shadowColor: Platform.OS === 'android'?'#000000': '#000000',
    shadowRadius: Platform.OS === 'android'? 40 : 20,
    shadowOpacity: Platform.OS === 'android'? 20 : 0.6,
    elevation: Platform.OS === 'android'? 8 : 8,
    shadowOffset: {width: 0,height: 4},
    // backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }

  const mapStateToProps = store => {
    return {
        allquestions: store.questions,
        answerS: store.questions.answer

        
    }
}

 export default connect(mapStateToProps, { successClap } )(SuccessScreen);