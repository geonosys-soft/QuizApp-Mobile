import { 
    NEW_GAME,
    TOTAL_SCORE,
   } from './type';
  import api from '../services/api';
  import axios from 'axios';
  import { BASE_URL } from '../constants/api'

  export const newgame = (formValues) => {

    return async function(dispatch) {
      try {
      var paymentRequest ={
        LogID: formValues
      }
      var config = {
        method: 'POST',
        url: `${BASE_URL}/AccountScoreDelete`,
        headers: {
            'content-type': 'application/json'
       
        },
        data: paymentRequest
    };

    const response = await axios(config)
    if(response.data[0].Result === "Success") {
        dispatch({
          type: TOTAL_SCORE,
          payload: []
        })
        dispatch({
        type: NEW_GAME,
        payload: response.data,
        })
      }
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
            payload: response.data
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