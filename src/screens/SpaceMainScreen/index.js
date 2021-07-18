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
  import { questions,translatedQuestion } from '../../actions/questions';
  
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
             spaceQue: this.props && this.props.allquestions && this.props.allquestions.questions,
             initialLoading: true,
             allData: []

         }
         
    }

    componentDidMount() {
       
        if(this.props.route.params.language !== 'ml') {
            const params = {
                "catid": '1',
            }
            this.props.questions(params);
        }else {
             const params = {
            "catid": '1',
            lang: this.props.route.params.language,
            mark: this.props.totalScore
        }
        this.props.translatedQuestion(params);
    }
    }
  
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("All props ? data", nextProps);
     
        if(nextProps && nextProps.allquestions && nextProps.allquestions.length !== 0 &&
            nextProps.allquestions.questions.length !== 0) {
                var qustionQ = nextProps.allquestions.questions;
                console.log("All props ? data", qustionQ);
            return {
                spaceQue: qustionQ,
                initialLoading: false
            }
        }

   

    }


    render() {
       
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
        answerS: store.questions.answer,
        totalScore: store.totalScore.totalscore.Score

        
    }
}

 export default connect(mapStateToProps, { questions,translatedQuestion })(SpaceMainScreen);