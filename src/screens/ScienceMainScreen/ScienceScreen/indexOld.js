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
    Modal
  } from 'react-native';

  import LinearGradient from 'react-native-linear-gradient';
  import { APP_FONT_FAMILY } from '../../../config';

  import { connect } from 'react-redux';

  
  import Header from '../../../components/Header';
  import SpaceButton from '../../../components/SpaceButton';
  import ModalButton from '../../../components/ModalButton';


  var qustionArray = [];
  var question, optionA, optionB, optionC, optionD, correctAns, mark,nmark, answerStatus;
  //var count= 0;
  var data;
  var wrongAnsData = 1

  class ScienceScreen extends Component {

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
             isCorrectAns: false,
             refresh: false
             

         }
         
    }

    


    componentDidMount() {

        data = this.props.data;
    
        console.log("all data", data);
        if(data.length !== 0) {
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
    wrongAns =(value) => {
        this.setState({
         isMenuVisible: value
        }) 
        if(wrongAnsData === 9){
            this.props.navigation.navigate("SuccessScreen");
            }
     }
     correctAns =(value,count) => {
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
    closModal =() => {
        this.setState({
            isCorrectAns: false
          })
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
            nmarkData: nmarkS 
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
      
        questionS = data[wrongAnsData].Question;
        optionAS = data[wrongAnsData].OPA;
        optionBS = data[wrongAnsData].OPB;
        optionCS = data[wrongAnsData].OPC;
        optionDS = data[wrongAnsData].OPD;
        correctAnsS = data[wrongAnsData].ANSWER;
        markS = data[wrongAnsData].MARK;
        nmarkS = data[wrongAnsData].NMARK;

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
                        topColor={'#215caa'}
                        middelColor={'#274d9f'}
                        endColor={'#2a3c93'}
                        onPressItem='CategoryScreen'
                        navigation={this.props.navigation}
                    />
                </View>
                <View style={{ flex: 0.85}}>
                    <ImageBackground source={require('../../../assets/ScienceBg.png')} style={{ flex: 1, width: '100%', height: '100%' }}>

                        <View style={{ flex: 0.10, justifyContent: 'flex-end', alignItems: 'flex-start', flexDirection: 'column' }}>

                            <Text style={{ fontSize: 24, fontFamily: APP_FONT_FAMILY, color: '#FFFFFF', marginLeft: 13 }}>{'Science'}</Text>
                            <Image source={require('../../../assets/spaceBar.png')} style={{ width: '95%', height: 15, marginLeft: 10, marginRight: 10 }} />

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
                         catID={3}
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
                         catID={3}
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
                         catID={3}
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
                         catID={3}
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
              Alert.alert('Modal has now been closed.');
            }}>
            <Image
              source={require('../../../assets/wrongans.png')}
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
              Alert.alert('Modal has now been closed.');
            }}>
        <TouchableOpacity onPress ={()=>{
            this.setState({
                isCorrectAns: false
            })
        }}>
            <Image
              source={require('../../../assets/rightans.png')}
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
    shadowOffset: {width: 0,height: 4}
  }

  const mapStateToProps = store => {
    return {
        allquestions: store.questions,
        answerS: store.questions.answer

        
    }
}

 export default connect(mapStateToProps )(ScienceScreen);