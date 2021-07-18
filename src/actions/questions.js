import { 
    QUESTIONS,
    SUMBIT_ANSWER,
    NATURE_QUE,
    HISTORY_QUE,
    SCIENCE_QUE
   } from './type';
  import api from '../services/api';
  import axios from 'axios';
  import { BASE_URL } from '../constants/api'
  
  export const questions = (formValues) => {

      return async function(dispatch) {
        try {
        var paymentRequest ={
          CatID: formValues.catid
        }
        var config = {
          method: 'POST',
          url: `${BASE_URL}/Questions`,
          headers: {
              'content-type': 'application/json'
         
          },
          data: paymentRequest
      };

      const response = await axios(config)
     
          dispatch({
          type: QUESTIONS,
          payload: response.data
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
  export const translatedQuestion = (formValues) => {

    return async function(dispatch) {
      try {
      var paymentRequest ={
        CatID: formValues.catid,
        Lang: formValues.lang,
        MARK: formValues.mark
      }
      var config = {
        method: 'POST',
        url: `${BASE_URL}/OLQuestions`,
        headers: {
            'content-type': 'application/json'
       
        },
        data: paymentRequest
    };

    const response = await axios(config)
   
        dispatch({
        type: QUESTIONS,
        payload: response.data
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
    console.log(formValues,'====kokoman');
    return async function(dispatch) {
      
    const response = await api.post('/AccountScoreInsert', {
      CatID:formValues.CatID,
      LogID:formValues.LogID,
      Score: formValues.Score
      });

      console.log("response.data==", response.data[0].Result) 
      

        dispatch({
        type: SUMBIT_ANSWER,
        payload: response.data
        })
    }
}

export const clearQuertion = () => {
  return async function(dispatch) {
    try {
  dispatch({
    type: QUESTIONS,
    payload: []
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

export const questionsNature = (formValues) => {

  return async function(dispatch) {
    try {
    var paymentRequest ={
      CatID: formValues.catid
    }
    var config = {
      method: 'POST',
      url: `${BASE_URL}/Questions`,
      headers: {
          'content-type': 'application/json'
     
      },
      data: paymentRequest
  };

  const response = await axios(config)
 
      dispatch({
      type: NATURE_QUE,
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

export const translatequestionsNature = (formValues) => {

  return async function(dispatch) {
    try {
    var paymentRequest ={
      CatID: formValues.catid,
      Lang: formValues.lang,
      MARK: formValues.mark
    }
    var config = {
      method: 'POST',
      url: `${BASE_URL}/OLQuestions`,
      headers: {
          'content-type': 'application/json'
     
      },
     
      data: paymentRequest
  };

  const response = await axios(config)
 
      dispatch({
      type: NATURE_QUE,
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

export const questionsHistory = (formValues) => {

  return async function(dispatch) {
    try {
    var paymentRequest ={
      CatID: formValues.catid
    }
    var config = {
      method: 'POST',
      url: `${BASE_URL}/Questions`,
      headers: {
          'content-type': 'application/json'
     
      },
      data: paymentRequest
  };

  const response = await axios(config)

  console.log("azhar", response.data)
 
      dispatch({
      type: HISTORY_QUE,
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
export const translatedquestionsHistory = (formValues) => {

  return async function(dispatch) {
    try {
    var paymentRequest ={
      CatID: formValues.catid,
      Lang: formValues.lang,
      MARK: formValues.mark
    }
    var config = {
      method: 'POST',
      url: `${BASE_URL}/OLQuestions`,
      headers: {
          'content-type': 'application/json'
     
      },
      data: paymentRequest
  };

  const response = await axios(config)

 
      dispatch({
      type: HISTORY_QUE,
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
export const questionsScience = (formValues) => {

  return async function(dispatch) {
    try {
    var paymentRequest ={
      CatID: formValues.catid
    }
    var config = {
      method: 'POST',
      url: `${BASE_URL}/Questions`,
      headers: {
          'content-type': 'application/json'
     
      },
      data: paymentRequest
  };

  const response = await axios(config)
 
      dispatch({
      type: SCIENCE_QUE,
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
export const translatedQuestionScience = (formValues) => {

  return async function(dispatch) {
    try {
    var paymentRequest ={
      CatID: formValues.catid,
      Lang: formValues.lang,
      MARK: formValues.mark
    }
    var config = {
      method: 'POST',
      url: `${BASE_URL}/OLQuestions`,
      headers: {
          'content-type': 'application/json'
     
      },
      data: paymentRequest
  };

  const response = await axios(config)
 
      dispatch({
      type: SCIENCE_QUE,
      payload: response.data
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