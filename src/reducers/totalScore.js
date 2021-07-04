import { TOTAL_SCORE } from '../actions/type';

export default (state = [], action) => {

    switch (action.type) {
        case TOTAL_SCORE:
            return {
                totalscore: action.payload
            };
      
        default:
            return state;
    }

}