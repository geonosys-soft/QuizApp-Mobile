import api from '../services/api';
import { VERSION } from './type';

export const version = () => {

  return async function(dispatch) {
  const response = await api.get('/GetVersion');

      dispatch({
      type: VERSION,
      payload: response.data
      })
  }
}