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
import {
    DotIndicator
  } from 'react-native-indicators';

var index = 3
var flatListItem = [];
var lastmark = []
var initialElements = [
    { id : "0", text : "Object 1"},
    { id : "1", text : "Object 2"},
  ]
class LeadingBorder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allquestion: [],
            initialLoading: true,
            allData: [],
            monthClick: false,
            todayClick: true,
            weekClick: false,
            dateValue: "2day",
            userId: '',
            allmarkData: [],
            initialLoading: true,
            firstName: '',
            secondName: '',
            thridNAme: '',
            fstscore: '',
            scndscore: '',
            thirdscore: '',
            flatListItems: []

        }

    }

    async componentDidMount() {

        try {
            var value = await AsyncStorage.getItem('@LogId');
            this.setState({
                userId: value
            })
            var dateValue = this.state.dateValue;
            var param = {
                LogId: value,
                dateValue: dateValue
            }
            this.props.personalMark(param)
             var requestData = {
            dateValue: this.state.dateValue
        }
            this.props.allMark(requestData)

        } catch (error) {
            // Error retrieving data
        }
       
        
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps && nextProps.allmark && nextProps.allmark.length !== 0 && nextProps.allmark) {
            var allMark = nextProps.allmark;
           

                    lastmark = allMark.slice(3);
            

            return {
                allmarkData: allMark,
                initialLoading: false,
                firstName:allMark[0].Name,
                secondName: allMark[1].Name,
                thridNAme: allMark[2].Name,
                fstscore: allMark[0].Score,
                scndscore: allMark[1].Score,
                thirdscore: allMark[2].Score,
                flatListItems: initialElements
            }

        }



    }
    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "90%",
                    marginLeft: 20,

                    backgroundColor: "#607D8B",
                }}
            />
        );
    }

    render() {

        var personalID = this.props.personal && this.props.personal.LogID;
        var personalScore = this.props.personal && this.props.personal.Score;


        if (this.state.initialLoading == true) {
            return (
                <LinearGradient colors={['#be27e7', '#a222ea', '#e21dd9']} style={{
                    flex: 1,
                    
                }}>
                   <DotIndicator color='white' />
                </LinearGradient>)
        }
        else {
            return (
                <LinearGradient colors={['#be27e7', '#a222ea', '#e21dd9']} style={{ flex: 1 }} >

                    <View style={{ flex: 0.10, top: 40, left: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                            <Image source={require('../../assets/backArrow.png')} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.50 }}>
                        <View style={{ flex: 0.10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => {
                                    var requestData = {
                                        dateValue: "1month"
                                    }
                                    this.props.allMark(requestData)
                                    var param = {
                                        LogId: this.state.userId,
                                        dateValue: "1month"
                                    }
                                    this.props.personalMark(param)
                                    if(this.state.monthClick == false) {
                                    this.setState({
                                        weekClick: false,
                                        todayClick: false,
                                        monthClick: !this.state.monthClick
                                    })
                                }
                                }}>
                                    <Text style={{
                                        fontWeight: this.state.monthClick === true ? 'bold' : 'normal',
                                        fontSize: this.state.monthClick === true ? normalize(26) : normalize(18),
                                        color: 'white'
                                    }}>{'Month'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => {
                                    var requestData = {
                                        dateValue: "2day"
                                    }
                                    this.props.allMark(requestData)
                                    var param = {
                                        LogId: this.state.userId,
                                        dateValue: "2day"
                                    }
                                    this.props.personalMark(param)
                                    if(this.state.todayClick == false) {
                                    this.setState({
                                        weekClick: false,
                                        todayClick: !this.state.todayClick,
                                        monthClick: false
                                    })
                                }
                                }}>
                                    <Text style={{
                                        fontWeight: this.state.todayClick === true ? 'bold' : 'normal',
                                        fontSize: this.state.todayClick === true ? normalize(26) : normalize(18),
                                        color: 'white'
                                    }}>{'Today'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => {
                                    var requestData = {
                                        dateValue: "7days"
                                    }
                                    this.props.allMark(requestData)
                                    var param = {
                                        LogId: this.state.userId,
                                        dateValue: "7days"
                                    }
                                    this.props.personalMark(param)
                                    if(this.state.weekClick == false) {
                                    this.setState({
                                        weekClick: !this.state.weekClick,
                                        todayClick: false,
                                        monthClick: false
                                    })
                                }
                                }}>
                                    <Text style={{
                                        fontWeight: this.state.weekClick == true ? 'bold' : 'normal',
                                        fontSize: this.state.weekClick == true ? normalize(26) : normalize(18),
                                        color: 'white'
                                    }}>{'Week'}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        {/* piller section */}
                        <View style={{ flex: 0.90, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', marginLeft: 30 }}>
                            <View style={{ flex: 1, left: 15 }}>
                                <View style={{ flex: 0.30, justifyContent: 'center', alignItems: 'center', bottom: 40 }}>
                                    <Image
                                        source={require('../../assets/ringer.png')}
                                        style={{ width: 80, height: 80 }}
                                    />
                                    <Text style={{
                                        top: 5,
                                        color: '#fff',
                                        fontSize: normalize(12),

                                    }}>
                                        {this.state.firstName}
                                    </Text>
                                </View>
                                <ImageBackground
                                    source={require('../../assets/pillerOne.png')}
                                    style={{ width: 95, height: 205 }}>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        top: 10
                                    }}>
                                        <Image
                                            source={require('../../assets/onehg.png')}
                                            style={{ width: 40, height: 40 }}
                                        />

                                        <Text style={{
                                            color: '#fff',
                                            fontSize: normalize(12),
                                            top: 10
                                        }}>
                                            {this.state.fstscore}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 0.30, justifyContent: 'center', alignItems: 'center', bottom: 40 }}>
                                    <Image
                                        source={require('../../assets/ringer.png')}
                                        style={{ width: 80, height: 80 }}
                                    />
                                    <Text style={{
                                        top: 5,
                                        color: '#fff',
                                        fontSize: normalize(12),

                                    }}>
                                        {this.state.secondName}
                                    </Text>
                                </View>
                                <ImageBackground
                                    source={require('../../assets/pillerTwo.png')}
                                    style={{ width: 95, height: 160 }}>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}>
                                        <Image
                                            source={require('../../assets/twohg.png')}
                                            style={{ width: 40, height: 40 }}
                                        />
                                        <Text style={{

                                            color: '#fff',
                                            fontSize: normalize(12)
                                        }}>
                                            {this.state.scndscore}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{ flex: 1, right: 15 }}>
                                <View style={{ flex: 0.30, justifyContent: 'center', alignItems: 'center', bottom: 40 }}>
                                    <Image
                                        source={require('../../assets/ringer.png')}
                                        style={{ width: 80, height: 80 }}
                                    />
                                    <Text style={{
                                        top: 5,
                                        color: '#fff',
                                        fontSize: normalize(12),

                                    }}>
                                        {this.state.thridNAme}
                                    </Text>
                                </View>
                                <ImageBackground
                                    source={require('../../assets/pillerThree.png')}
                                    style={{ width: 85, height: 115 }}>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}>
                                        <Image
                                            source={require('../../assets/threehg.png')}
                                            style={{ width: 40, height: 40 }}
                                        />
                                        <Text style={{
                                            color: '#fff',
                                            fontSize: normalize(12)
                                        }}>
                                            {this.state.thirdscore}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>

                    </View>
                    <View style={{ flex: 0.40 }}>
                        <LinearGradient colors={['#d31ede', '#a621ea', '#8021f8']} style={{
                            flex: 0.20,
                            borderWidth: 1,
                            borderTopLeftRadius: 50,
                            borderTopRightRadius: 50,
                            borderColor: '#d31ede',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    flex: 1, justifyContent: 'space-between',
                                    alignItems: 'center', left: 20
                                }}>
                                    {/* <Text style={{
                                        alignSelf: 'center',
                                        top: 10,
                                        color: '#fff',
                                        fontSize: normalize(16)
                                    }}>{personalID}</Text> */}
                                </View>
                                <View style={{
                                    flex: 1, justifyContent: 'space-between',
                                    alignItems: 'center',
                                    right:17
                                }}>
                                    <View style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 44 / 2,
                                        backgroundColor: '#fff'
                                    }}></View>
                                </View>
                                <View style={{
                                    flex: 1, justifyContent: 'space-between',
                                    alignItems: 'center', right: 30
                                }}>
                                    <Text style={{
                                        alignSelf: 'center',
                                        top: 10,
                                        color: '#fff',
                                        fontSize: normalize(16)
                                    }}>{"You"}</Text>
                                </View>

                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                left: 50
                            }}>
                                <View style={{
                                    flex: 1, justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: normalize(16)
                                    }}>{personalScore}</Text>
                                </View>
                                <View style={{
                                    flex: 1, justifyContent: 'space-between',
                                    alignItems: 'center', right: 50
                                }}>
                                    <Image
                                        source={require('../../assets/koman.png')}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            resizeMode: 'contain'
                                        }}
                                    />
                                </View>

                            </View>

                        </LinearGradient>
                        <View style={{ flex: 0.80, backgroundColor: '#dbdcf7', justifyContent: 'center' }}>
                      
                            <FlatList

                                data={lastmark}

                                ItemSeparatorComponent={this.FlatListItemSeparator}

                                renderItem={({ item, index }) =>{
                                   var indexvale =4;
                                   var mainIndex = indexvale + index
                                    return (
                                    <View style={{
                                        flex: 1
                                    }}>
                                        <View style={{ flex: 0.50, flexDirection: 'row', alignItems: 'center', top: 20, left: 50 }}>
                                        <Text style={{
                                            color: '#7e52a6',
                                            fontSize: normalize(12),
                                            right: 10,
                                           
                                            fontWeight: 'bold'
                                        }} > {mainIndex} </Text>
                                            <View style={{
                                                width: 44,
                                                height: 44,
                                                borderRadius: 44 / 2,
                                                backgroundColor: '#fff'
                                            }}></View>
                                            <Text style={styles.itemsecond} > {item.Name} </Text>
                                        </View>
                                        <View style={{ flex: 0.50, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', bottom: 20, right: 40 }}>
                                            <Text style={styles.item} > {item.Score} </Text>
                                        </View>
                                    </View>

                                    )}

                                }
                            />
                        </View>

                    </View>

                </LinearGradient>
            )
        }
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
        top: 5,
        fontWeight: 'bold'
    }

});

const mapStateToProps = store => {
    return {

        personal: store.leadingboard.personal,
        allmark: store.leadingboard.allMark

    }
}

export default connect(mapStateToProps, { personalMark, allMark })(LeadingBorder);