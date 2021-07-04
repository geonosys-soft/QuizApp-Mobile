import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
import { Icon } from 'native-base'

function MiniOfflineSign() {
  return (
    <View style={[styles.offlineContainer, Platform.OS === 'ios' ? { top: 40 } : null]}>
      <Icon type="Feather" name="alert-triangle" style={{ fontSize: 16, color: 'white' }} />
      <Text style={[styles.offlineText, { paddingHorizontal: 5 }]}>No Internet Connection</Text>
    </View>
  );
}

function OfflineFullScreen() {
  return (
    <View style={styles.Container} >
      <View style={{ width: '80%', height: 250, backgroundColor: 'white', borderRadius: 5 }}>

      </View>
    </View>
  )
}

class OfflineAlert extends PureComponent {
  // constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }
  state = {
    isConnected: true
  };

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      this.setState({ isConnected: state.isConnected })
    });
  }

  componentWillUnmount() {
    this.unsubscribe()
  }


  render() {
    if (!this.state.isConnected) {
      return <MiniOfflineSign />;
    }
    return null;
  }

}
const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 0,
    zIndex: 9999
  },
  offlineText: {
    color: '#fff'
  },
  Container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    zIndex: 9999
  }
});

export default OfflineAlert;