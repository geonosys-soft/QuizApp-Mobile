import { NATURE_QUE } from '../actions/type';

const initialState = {
    natureque: [],
   
};

export default (state = initialState, action) => {

    switch (action.type) {
     
        case NATURE_QUE: {
            return {
                ...state,
                natureque: action.payload
            }
        }
        default:
            return state;
    }

}