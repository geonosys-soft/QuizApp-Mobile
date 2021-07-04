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
  import { questionsNature } from '../../actions/questions';
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

        const params = {
            "catid": '2'
        }
        this.props.questionsNature(params);
    }
   
    static getDerivedStateFromProps(props, prevState) {
     
        if(props && props.allquestions && props.allquestions.natureque) {
                qustionArray = props.allquestions.natureque;
           console.log("koman", qustionArray)
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

 export default connect(mapStateToProps, { questionsNature })(NatureMainScreen);