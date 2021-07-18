import React, {Component} from 'react';
import {
  
    View,
   
  } from 'react-native';
  import {
   
    DotIndicator,
 
  } from 'react-native-indicators';
  import LinearGradient from 'react-native-linear-gradient';
  import { connect } from 'react-redux';
  import { questionsHistory, translatedquestionsHistory } from '../../actions/questions';
  
  import HistoyScreen from './HistoryScreen';

  var qustionArray = [];
 
  

  class HistoryMainScreen extends Component {

    constructor(props) {
        super(props);
         this.state = {
             allquestion: [],
             historyLoading: true,
             allData: []

         }
         
    }

    componentDidMount() {

        const params = {
            "catid": '4'
        }
        this.props.questionsHistory(params);

        if(this.props.route.params.language !== 'ml') {
            const params = {
                "catid": '4'
            }
            this.props.questionsHistory(params);
        }else {
             const params = {
            "catid": '4',
            lang: this.props.route.params.language,
            mark: this.props.totalScore
        }
        this.props.translatedquestionsHistory(params);
    }
    }
    
    static getDerivedStateFromProps(newProps, prevState) {
     
        if(newProps && newProps.allquestions && newProps.allquestions.length !== 0 &&
            newProps.allquestions.historyque.length !== 0) {
           
                qustionArray = newProps.allquestions.historyque;
           
            return {
                allquestion: qustionArray,
                historyLoading: false
            }
        }

   

    }


    render() {
       
        return(
            <View style={{ flex: 1 }}>
                {this.state.allquestion.length !== 10 ?
               <LinearGradient colors={['#9e7339', '#8d6232', '#794f29']} style = {{flex: 1 }}>
                 <DotIndicator color='white' />
             </LinearGradient> :
              <HistoyScreen
                data={this.state.historyLoading !== true ? this.state.allquestion : this.props.allquestions.historyque}
                navigation={this.props.navigation}
              />}
            </View>
        )
    }
  }



  const mapStateToProps = store => {
    return {
        allquestions: store.qustionHistory,
        answerS: store.questions.answer,
        totalScore: store.totalScore.totalscore.Score

        
    }
}

 export default connect(mapStateToProps, { questionsHistory, translatedquestionsHistory })(HistoryMainScreen);