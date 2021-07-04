import { USER_DETAILS } from '../actions/type';

export default (state = [], action) => {

    switch (action.type) {
        case USER_DETAILS:
            return {
                userdetials: action.payload
            };
       
        default:
            return state;
    }

}