import { 
  LOGIN_OPE,
  SIGN_UP,
  USER_DETAILS,
  GOOGLE_LOGIN,
  UNREG_USER,
 } from './type';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

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
