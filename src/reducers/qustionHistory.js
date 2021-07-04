import { HISTORY_QUE } from '../actions/type';

const initialState = {
    historyque: [],
   
};

export default (state = initialState, action) => {

    switch (action.type) {
     
        case HISTORY_QUE: {
            return {
                ...state,
                historyque: action.payload
            }
        }
        default:
            return state;
    }

}