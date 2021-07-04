import { NEXT_QUESTION } from '../actions/type';

const initialState = {
    nextQues: [],
};

export default (state = [], action) => {

    switch (action.type) {
        case NEXT_QUESTION:
            return {
                nextQues: action.payload
            };
     
        default:
            return state;
    }

}