import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import { clearQuestions,clearScienceQues, clearHistoryQues, clearNatureQues } from '../../actions/nextQues';
import { connect } from 'react-redux';

const data = [
    {label: 'English', value: 'English', global: require('../../assets/globe.png'), langID: 'en'},
    {label: 'മലയാളം', value: 'മലയാളം', langID: 'ml'},
    {label: 'हिंदी', value: 'हिंदी',langID: 'hi'},
    // {label: 'هندي', value: 'هندي',langID: 'ml'},
   
];

const LanguagePicker = _props => {
    const [dropdown, setDropdown] = useState('English');
    const [selected, setSelected] = useState([]);

    const _renderItem = item => {
        return (
        <View style={styles.item}>
            {item.global ?
              <Image style={styles.icon} source={item.global} />: null}
            <Text style={{ 
                  flex: 1,
                  fontSize: 16,
                  left: item.global ? 0: 30
            }}>{item.label}</Text>
          
        </View>
        );
    };

    useEffect(() => {
        // Update the document title using the browser API
      
      },[]);

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="English"
                value={dropdown}
                onChange={item => {
                setDropdown(item.value);
                _props.selectedLang(item.langID)
                _props.clearQuestions();
                _props.clearScienceQues();
                _props.clearHistoryQues();
                _props.clearNatureQues();
                    console.log('selected', item);
                }}
                renderLeftIcon={() => (
                    dropdown == 'English'?
                    <Image style={styles.icon} source={require('../../assets/globe.png')} />:null 
                )}
                renderItem={item => _renderItem(item)}
            />

        </View>
    );
};
const mapStateToProps = store => {
    return {
    


    }
}

export default connect(mapStateToProps, { clearQuestions,clearScienceQues, clearHistoryQues,clearNatureQues })(LanguagePicker);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        right: 10

    },
    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 10,
        width: 170,
        borderWidth:1,
        borderRadius: 7,
        paddingLeft: 10
    },
  
    icon: {
        marginRight: 5,
        width: 18,
        height: 18,
    },
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
});