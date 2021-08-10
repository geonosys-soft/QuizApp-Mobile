import { 
    TOTAL_SCORE,
    SUMBIT_ANSWER
   } from './type';
  import api from '../services/api';
  import axios from 'axios';
  import { BASE_URL } from '../constants/api'
  
  export const totalScore = (formValues) => {

    
  
      return async function(dispatch) {
  
          try {
            var paymentRequest ={
              LogID: formValues.logid
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
        
              dispatch({
                type: TOTAL_SCORE,
                payload: response.data.length !== 0 ?response.data[0]: []
              })
            
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

  export const totalScoreUnReg = (formValues) => {
  
    return async function(dispatch) {

        try {
          var paymentRequest ={
            Deviceid: formValues.id
          }
          var config = {
            method: 'POST',
            url: `${BASE_URL}/UnregAccountScoreData`,
            headers: {
                'content-type': 'application/json'
           
            },
            data: paymentRequest
        };
  
        const response = await axios(config)
       
            dispatch({
              type: TOTAL_SCORE,
              payload: response.data[0]
            })
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

export const sumbitAnswer = (formValues) => {
  var formva = formValues
  return async function(dispatch) {
    
  const response = await api.post('/AccountScoreInsert', {
    CatID:formValues.CatID,
    LogID:formValues.LogID,
    Score: formValues.Score
    });
    if(response.data[0].Result === "Success") {
      dispatch(totalScoreInstand(formva.LogID))
      dispatch({
      type: SUMBIT_ANSWER,
      payload: response.data
      })
    }
  }
}

export const totalScoreInstand = (formValues) => {

   
  
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

export const clearScore = () => {
   
  return {
      type: TOTAL_SCORE,
      payload: []
      
  }
}