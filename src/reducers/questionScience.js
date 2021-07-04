import { SCIENCE_QUE } from '../actions/type';

const initialState = {
    scienceque: [],
   
};

export default (state = initialState, action) => {

    switch (action.type) {
     
        case SCIENCE_QUE: {
            return {
                ...state,
                scienceque: action.payload
            }
        }
        default:
            return state;
    }

}