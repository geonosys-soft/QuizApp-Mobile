import React, {Component} from 'react';
import {
  
    View,
    
  } from 'react-native';

  import LinearGradient from 'react-native-linear-gradient';
  import { APP_FONT_FAMILY } from '../../config';

  import { connect } from 'react-redux';
  import { questionsScience, translatedQuestionScience } from '../../actions/questions';
  
  import ScienceScreen from './ScienceScreen';

  import {

    DotIndicator,
   
  } from 'react-native-indicators';

  var qustionArray = [];
 
  

  class ScienceMainScreen extends Component {

    constructor(props) {
        super(props);
         this.state = {
             allquestion: this.props && this.props.allquestions && this.props.allquestions.scienceque,
             scienceLoading: true,
             allData: []

         }
         
    }

    componentDidMount() {
        
        this.setState({});

        const params = {
            "catid": '3',
            lang: this.props.route.params.language,
            mark: this.props.totalScore
        }
        this.props.translatedQuestionScience(params);

    //     if(this.props.route.params.language !== 'ml') {
    //         const params = {
    //             "catid": '3'
    //         }
    //         this.props.questionsScience(params);
    //     }else {
    //          const params = {
    //         "catid": '3',
    //         lang: this.props.route.params.language,
    //         mark: this.props.totalScore
    //     }
    //     this.props.translatedQuestionScience(params);
    // }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
     
        if(nextProps && nextProps.allquestions && nextProps.allquestions.length !== 0 &&
            nextProps.allquestions.scienceque.length !== 0) {
                qustionArray = nextProps.allquestions.scienceque;
                console.log("All props ? data", qustionArray);
            return {
                allquestion: qustionArray,
                scienceLoading: false
            }
        }
        else {
            return {
                allquestion: [],
                scienceLoading: true
            } 
        }

   

    }


    render() {
       
        if(this.state.allquestion.length !== 10 ) {
        return(
            <LinearGradient colors={['#215caa', '#274d9f', '#2a3c93']} style = {{flex: 1,
               }}>
           <DotIndicator color='white' />
         </LinearGradient> 
            )
        } else {
        return(
            <View style={{ flex: 1 }}>
              
              <ScienceScreen
                data={this.state.scienceLoading !== true ? this.state.allquestion : this.props.allquestions.scienceque }
                navigation={this.props.navigation}
                nextProps={this.state.scienceLoading}
              />
            </View>
        )
     }
    }
  }



  const mapStateToProps = store => {
    return {
        allquestions: store.questionScience,
        answerS: store.questions.answer,
        totalScore: store.totalScore.totalscore.Score

        
    }
}

 export default connect(mapStateToProps, { questionsScience,translatedQuestionScience })(ScienceMainScreen);