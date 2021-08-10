import { 
  LOGIN_OPE,
  SIGN_UP,
  USER_DETAILS,
  GOOGLE_LOGIN,
  UNREG_USER,
  TOTAL_SCORE,
 } from './type';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { BASE_URL } from '../constants/api'
import axios from 'axios';

export const createLogin = (formValues) => {

    return async function(dispatch) {
    const response = await api.post('/LoginData', {
        password: formValues.password,
        Username: formValues.username
      });
      const [userInfo, setUserInfo] = React.useState({ 
        logid: ''
      });
      setUserInfo({ logid: response.data.payload[0].LogID })
        dispatch({
        type: LOGIN_OPE,
        payload: response.data
        })
    }
}

export const signUp = (formValues) => {

  return async function(dispatch) {

    const response = await api.post('/LoginInsert', {
      
        Email: formValues.email,
        password:formValues.password,
        Username: formValues.username,
        
    }) 

    dispatch({
      type: SIGN_UP,
      payload: response.data
    })
  }
}

export const googleLogin = (formValues) => {
  return async function(dispatch) {

    try {
    const response = await api.post('/LoginGoogleData', {

      Email: formValues.email,
      Name: formValues.name,
      Imageurl: formValues.photo,
      Device:formValues.Device,
      Deviceid:formValues.Deviceid,
      
    })

    console.log("laleeeee", response.data)
    await AsyncStorage.setItem(
      '@LogId',
     response.data[0].LogID
    );
    if(response.data.length !== 0){
      dispatch(totalScore(response.data[0].LogID))
    }

  } catch (error) {
    // Error saving data
    console.log("error message", error)
  }

    dispatch({
      type: GOOGLE_LOGIN,
      payload: response.data
    })
  }
}

export const unregUser = (formValues) => {
  return async function(dispatch) {

    try {
    const response = await api.post('/LoginDeviceId', {

      Deviceid: formValues.id
      
    })

    console.log("laleeeee", response.data)
    await AsyncStorage.setItem(
      '@LogId',
     response.data[0].LogID
    );
    if(response.data.length !== 0){
      dispatch(totalScore(response.data[0].LogID))
      dispatch({
        type: GOOGLE_LOGIN,
        payload: response.data
      })
    }


  } catch (error) {
    // Error saving data
    console.log("error message", error)
  }

  
  }
}
export const totalScore = (formValues) => {

   
  
  return async function(dispatch) {

      try {
        var paymentRequest ={
          LogID: formValues
        }
        var config = {
          method: 'POST',
          url: `${BASE_URL}/AccountScoreData`,
          headers: {
              'content-type': 'application/json'
         
          },
          data: paymentRequest
      };

      const response = await axios(config)
     
      if(response.data.length !== 0) {
          dispatch({
            type: TOTAL_SCORE,
            payload: response.data[0]
          })
        }
        }catch (e) {
          if (e.response) {
              console.log(e.response);
              // console.log(e.response.data.errors.message);
              // console.log(error.response.status);
              // console.log(error.response.headers);
          } else if (e.request) {
              console.log(e.request);
          } else {
              console.log('Error', e.message);
          }
          // console.log(e.config);
      }
  }
}

export const userDetials = (formValues) => {

  return async function(dispatch) {
  
    const response = await api.post('/LogList', {
          LogID: formValues.logid
    })

  

    dispatch({
      type: USER_DETAILS,
      payload: response.data
    })
  }
}
