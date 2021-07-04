import api from '../services/api';
import { CATEGORY_LIST } from './type';

export const categoryList = () => {

  return async function(dispatch) {
  const response = await api.get('/getCatagoryList');

      dispatch({
      type: CATEGORY_LIST,
      payload: response.data
      })
  }
}