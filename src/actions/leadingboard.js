import { 
    PERSONAL_MARK,
    ALL_MARK
   } from './type';
  import api from '../services/api';
  import axios from 'axios';
  import { BASE_URL } from '../constants/api'

  export const personalMark = (formValues) => {

    return async function(dispatch) {
      try {
      var paymentRequest ={
        LogID: formValues.LogId,
        DateofAdd: formValues.dateValue
      }
      var config = {
        method: 'POST',
        url: `${BASE_URL}/DataByLogin`,
        headers: {
            'content-type': 'application/json'
       
        },
        data: paymentRequest
    };

    const response = await axios(config)
    console.log("ddddddwew", response.data[0])
        dispatch({
        type: PERSONAL_MARK,
        payload: response.data[0]
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

export const allMark = (formValues) => {

  return async function(dispatch) {
    try {
    var paymentRequest ={
      DateofAdd: formValues.dateValue
    }
    var config = {
      method: 'POST',
      url: `${BASE_URL}/LeaderData`,
      headers: {
          'content-type': 'application/json'
     
      },
      data: paymentRequest
  };

  const response = await axios(config)

      dispatch({
      type: ALL_MARK,
      payload: response.data
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