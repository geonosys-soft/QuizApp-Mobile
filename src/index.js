import React, { Component } from 'react';
import { View, Text, Platform, SafeAreaView, AsyncStorage, AppState } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Sound from 'react-native-sound';
import { version } from './actions/versionupgrade';

import Router from '../src/router';

const logger = createLogger({ collapsed: true });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
//store.subscribe(() => console.log('store', store.getState()));

import OfflineAlert from './components/OfflineComponent/OfflineAlert';

class Index extends Component {
  state = {
    
  }
  componentDidMount() {

    // const bootstrapAsync = async () => {
    //   try {
       

    //       store.dispatch(version())
        
    //   } catch (e) {
    //    console.log(e)
    //   }
     
    // }

  
    // bootstrapAsync()
  

  }



  render() {

    return (
      <Provider store={store}>
        <Router />
        <OfflineAlert />
      </Provider>



    )
  }
}

export default Index;