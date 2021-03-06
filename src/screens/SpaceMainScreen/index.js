import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image,
    Platform,
    ActivityIndicator
  } from 'react-native';

  import LinearGradient from 'react-native-linear-gradient';
  import { APP_FONT_FAMILY } from '../../config';

  import { connect } from 'react-redux';
  import { questions } from '../../actions/questions';
  
  import Header from '../../components/Header';
  import SpaceButton from '../../components/SpaceButton';
  import SpaceScreen from '../../screens/SpaceScreen';

  var qustionArray = [];
 
  import {
  
    DotIndicator,
  
  } from 'react-native-indicators';

  class SpaceMainScreen extends Component {

    constructor(props) {
        super(props);
         this.state = {
             spaceQue: [],
             initialLoading: true,
             allData: []

         }
         
    }

    componentDidMount() {

        const params = {
            "catid": '1'
        }
        this.props.questions(params);
    }
    get loaderStatus() {
        return tthis.props.allquestions.questions;
      }
    static getDerivedStateFromProps(nextProps, prevState) {
     
        if(nextProps && nextProps.allquestions && 
            nextProps.allquestions.questions) {
                var qustionQ = nextProps.allquestions.questions;
                console.log("All props ? data", qustionArray);
            return {
                spaceQue: qustionQ,
                initialLoading: false
            }
        }

   

    }


    render() {
        console.log("question no=====", this.state.spaceQue)
        return(
            <View style={{ flex: 1 }}>
                {this.state.initialLoading ?
                <LinearGradient colors={['#be27e7', '#a222ea', '#e21dd9']}  style = {{flex: 1 }}>
               <DotIndicator color='white' />
             </LinearGradient> :
              <SpaceScreen 
                datavalue={this.state.spaceQue}
                navigation={this.props.navigation}
              />}
            </View>
        )
    }
  }



  const mapStateToProps = store => {
    return {
        allquestions: store.questions,
        answerS: store.questions.answer

        
    }
}

 export default connect(mapStateToProps, { questions })(SpaceMainScreen);