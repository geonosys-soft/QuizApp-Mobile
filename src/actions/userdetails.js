import { USER_DETAILS } from './type';

import axios from 'axios';
import { BASE_URL } from '../constants/api'

export const userDetails = (formValues) => {

  return async function(dispatch) {
    try {
    var paymentRequest ={
      LogID: formValues
    }
    var config = {
      method: 'POST',
      url: `${BASE_URL}/LogList`,
      headers: {
          'content-type': 'application/json'
     
      },
      data: paymentRequest
  };

  const response = await axios(config)
 
      dispatch({
      type: USER_DETAILS,
      payload: response.data,
      })
    
    }catch (e) {
      if (e.response) {
          console.log(e.response);
       
      } else if (e.request) {
          console.log(e.request);
      } else {
          console.log('Error', e.message);
      }
      // console.log(e.config);
  }
  }
}