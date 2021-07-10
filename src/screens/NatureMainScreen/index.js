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

  import {
    DotIndicator
  } from 'react-native-indicators';
  import { connect } from 'react-redux';
  import { questionsNature, translatequestionsNature } from '../../actions/questions';
  import LinearGradient from 'react-native-linear-gradient';
  import NatureScreen from './NatureScreen';

  var qustionArray = [];
 
  

  class NatureMainScreen extends Component {

    constructor(props) {
        super(props);
         this.state = {
             allquestion: [],
             initialLoading: true,
             allData: []

         }
         
    }

    componentDidMount() {

        if(this.props.route.params.language !== 'ml') {
            const params = {
                "catid": '2',
            }
            this.props.questionsNature(params);
        }else {
             const params = {
            "catid": '2',
            lang: this.props.route.params.language
        }
        this.props.translatequestionsNature(params);
    }
    }
   
    static getDerivedStateFromProps(props, prevState) {
     
        if(props && props.allquestions && props.allquestions.length !== 0 &&
            props.allquestions.natureque.length !== 0) {
                qustionArray = props.allquestions.natureque;
        
            return {
                allquestion: qustionArray,
                initialLoading: false
            }
        }

   return null

    }


    render() {

   
        return(
            <View style={{ flex: 1 }}>
                {this.state.allquestion.length !== 10 ?
                 <LinearGradient colors={['#f2a448', '#fdd76d', '#ffe577']} style = {{flex: 1 }}>
                 <DotIndicator color='white' />
             </LinearGradient> :
              <NatureScreen
                data={this.state.initialLoading !== true ? this.state.allquestion : this.props.allquestions.natureque}
                navigation={this.props.navigation}
              />}
            </View>
        )
    }
  }



  const mapStateToProps = store => {
    return {
        allquestions: store.questionsNature,
        answerS: store.questions.answer

        
    }
}

 export default connect(mapStateToProps, { questionsNature, translatequestionsNature  })(NatureMainScreen);