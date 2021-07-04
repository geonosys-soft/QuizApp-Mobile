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
  import { clearQuertion } from '../../actions/questions';
  
  import Header from '../../components/Header';
  import SpaceButton from '../../components/SpaceButton';
  import ModalButton from '../../components/ModalButton';
  import { normalize } from '../../Styles/normalize'

  var qustionArray = [];
  var question, optionA, optionB, optionC, optionD, correctAns, mark,nmark, answerStatus;
  //var count= 0;
  var data;
  var wrongAnsData = 1

  class SpaceScreen extends Component {

    constructor(props) {
        super(props);
         this.state = {
             allquestion: [],
             questionData: '',
             optA: '',
             optB: '',
             optC: '',
             optD: '',
             correct: false,
             answerOtn: '',
             userAnswer: '',
             markData: '',
             nmarkData: '',
             nextQues: '',
             count: 0,
             allData: [],
             isMenuVisible: false,
             isCorrectAns: false

         }
         
    }

    componentDidMount() {

        data = this.props.datavalue;
   

        if(data !== []) {
        question = data[0].Question;
        optionA = data[0].OPA;
        optionB = data[0].OPB;
        optionC = data[0].OPC;
        optionD = data[0].OPD;
        correctAns = data[0].ANSWER;
        mark = data[0].MARK;
        nmark = data[0].NMARK;

        this.setState({
            questionData: question,
            optA: optionA,
            optB: optionB,
            optC: optionC,
            optD: optionD,
            answerOtn: correctAns,
            markData: mark,
            nmarkData: nmark 
        })
    }
 

    }

   

    answerValue =(answer)=> {
      this.setState({
        userAnswer: answer,
        correct: true
      })
    
    }

    closModal =() => {
        this.setState({
            isCorrectAns: false
          })
    }

    wrongAns =(value) => {
       this.setState({
        isMenuVisible: value
       }) 
       if(wrongAnsData === 9){
        this.props.navigation.navigate("SuccessScreen");
        }
    }
    correctAns =(value, count) => {
        this.setState({
            isCorrectAns: value
           }) 
           setTimeout(() => {
            this.closModal()
           
            if(wrongAnsData === 9){
            this.props.navigation.navigate("SuccessScreen");
            }
            }, 1000);
    }

    nextqus =() => {
        var next = wrongAnsData ++
    if(next <= 9) {
        
       questionS = data[next].Question;
        optionAS = data[next].OPA;
        optionBS = data[next].OPB;
        optionCS = data[next].OPC;
        optionDS = data[next].OPD;
        correctAnsS = data[next].ANSWER;
        markS = data[next].MARK;
        nmarkS = data[next].NMARK;

        this.setState({
            questionData: questionS,
            optA: optionAS,
            optB: optionBS,
            optC: optionCS,
            optD: optionDS,
            answerOtn: correctAnsS,
            markData: markS,
            nmarkData: nmarkS ,
            
        })
    } else {

      console.log("test")
    }

        
    }

    modalStatus =(valu) => {
        this.setState({
            isMenuVisible: valu
        })
    }

    nextqusWrng =() => {
        var next = wrongAnsData ++
        if(next <= 9) {
        questionS = data[next].Question;
        optionAS = data[next].OPA;
        optionBS = data[next].OPB;
        optionCS = data[next].OPC;
        optionDS = data[next].OPD;
        correctAnsS = data[next].ANSWER;
        markS = data[next].MARK;
        nmarkS = data[next].NMARK;

        this.setState({
            questionData: questionS,
            optA: optionAS,
            optB: optionBS,
            optC: optionCS,
            optD: optionDS,
            answerOtn: correctAnsS,
            markData: markS,
            nmarkData: nmarkS ,
            
        })
    } else {
        this.props.navigation.navigate("SuccessScreen");

    }
    }


    static getDerivedStateFromProps(nextProps, prevState) {
       

    }


    render() {
      console.log("anser data===",wrongAnsData)
        return(
            <View style={{ flex: 1 }}>
                <View style={[{
                    flex: 0.15,
                    backgroundColor: '#ffffff',
                }, shadow ]}>
                   
                    <Header
                        topColor={'#db577a'}
                        middelColor={'#d84f8c'}
                        endColor={'#bb4a8f'}
                        onPressItem='CategoryScreen'
                        navigation={this.props.navigation}
                    />
                </View>
                <View style={{ flex: 0.85}}>
                    <ImageBackground source={require('../../assets/spaceBg.png')} style={{ flex: 1, width: '100%', height: '100%' }}>

                        <View style={{ flex: 0.10, justifyContent: 'flex-end', alignItems: 'flex-start', flexDirection: 'column' }}>

                            <Text style={{ fontSize: 24, fontFamily: APP_FONT_FAMILY, color: '#FFFFFF', marginLeft: 13 }}>{'SPACE'}</Text>
                            <Image source={require('../../assets/spaceBar.png')} style={{ width: '95%', height: 15, marginLeft: 10, marginRight: 10 }} />

                        </View>
                        <View style={{ flex: 0.40 }}>

                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#474747', '#312d2d', '#1b1515']} style={{ flex: 40, alignItems: 'center', justifyContent: 'center', margin: 20, borderWidth: 1, borderColor: '#000000', borderRadius: 6 }} >
                                <Text style={{ color: '#ffffff'}}>{this.state.questionData}</Text>
                            </LinearGradient>
                        </View>
                        <View style={{ flex: 0.50, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={[{flex: 1 }, shadowSB]}>
                            <SpaceButton 
                         firstColor='#eb6022'
                         middelColor='#eb8225'
                         endColor='#f19d31'
                         name={this.state.optA}
                         makerValue={this.state.markData}
                         nmarkValue={this.state.nmarkData}
                         correctAns={this.state.answerOtn}
                         clickeD = {this.answerValue}
                         nextquest = {this.nextqus}
                         data={this.state.allData}
                         catID={1}
                         wrongans = {this.wrongAns}
                         correctans = {this.correctAns}


                        />
                            </View>
               
                            <View style={[{ flex: 1}, shadowSB]}>
                            <SpaceButton 
                         firstColor='#eb6022'
                         middelColor='#eb8225'
                         endColor='#f19d31'
                         name={this.state.optB}
                         makerValue={this.state.markData}
                         nmarkValue={this.state.nmarkData}
                         correctAns={this.state.answerOtn}
                         clickeD = {this.answerValue}
                         nextquest = {this.nextqus}
                         data={this.state.allData}
                         catID={1}
                         wrongans = {this.wrongAns}
                         correctans = {this.correctAns}
                        />
                            </View>
                            <View style={[{ flex: 1 }, shadowSB]}>
                            <SpaceButton 
                         firstColor='#eb6022'
                         middelColor='#eb8225'
                         endColor='#f19d31'
                         name={this.state.optC}
                         makerValue={this.state.markData}
                         nmarkValue={this.state.nmarkData}
                         correctAns={this.state.answerOtn}
                         clickeD = {this.answerValue}
                         nextquest = {this.nextqus}
                         data={this.state.allData}
                         catID={1}
                         wrongans = {this.wrongAns}
                         correctans = {this.correctAns}
                        />
                            </View>
                            <View style={[{ flex: 1 }, shadowSB]}>
                            <SpaceButton 
                         firstColor='#eb6022'
                         middelColor='#eb8225'
                         endColor='#f19d31'
                         name={this.state.optD}
                         makerValue={this.state.markData}
                         nmarkValue={this.state.nmarkData}
                         correctAns={this.state.answerOtn}
                         clickeD = {this.answerValue}
                         nextquest = {this.nextqus}
                         data={this.state.allData}
                         catID={1}
                         wrongans = {this.wrongAns}
                         correctans = {this.correctAns}
                        />
                            </View>
                        </View>

                    </ImageBackground>
              </View>
           {/*          Wrong answer        */}
                <Modal
            animationType = {"slide"}
            transparent={true}
            visible={this.state.isMenuVisible}
            animationInTiming={1200}
            onRequestClose={() => {
         
            }}>
            <Image
              source={require('../../assets/wrongans.png')}
              style = {{
                marginTop: 150,
                marginBottom: 10,
                width: '100%',
                height: 350,
                resizeMode: 'contain'
              }}/>
              <View style={{
                  top: -180,
                  left: Platform.OS == 'ios'? 80 :100
              }}>
              <ModalButton 
                         firstColor='#788bfe'
                         middelColor='#6db5ff'
                         endColor='#62dfff'
                         name={'next question'}
                         nextquest = {this.nextqusWrng}
                        counter = {wrongAnsData}
                        modalstatus={this.modalStatus}
                    
                        />
                </View>
                <View style={{
                  top: -110,
                  left: Platform.OS == 'ios'? 80 :100
              }}>
              <ModalButton 
                         firstColor='#fe8a04'
                         middelColor='#ff7605'
                         endColor='#f9c300'
                         name={'Play again'}
                         modalstatus={this.modalStatus}
                   
                    
                        />
             </View>
            
          </Modal> 
            {/*      Correct answer   */}
          <Modal
            animationType = {"slide"}
            transparent={true}
            visible={this.state.isCorrectAns}
            animationInTiming={1200}
            onRequestClose={() => {
              
            }}>
        <TouchableOpacity onPress ={()=>{
            this.setState({
                isCorrectAns: false
            })
        }}>
            <Image
              source={require('../../assets/rightans.png')}
              style = {{
                marginTop: 150,
                marginBottom: 10,
                width: '100%',
                height: 350,
                resizeMode: 'contain'
              }}/>
             
             </TouchableOpacity>   
          </Modal> 
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

 export default connect(mapStateToProps,{clearQuertion} )(SpaceScreen);