import { VERSION } from '../actions/type';

export default (state = [], action) => {

    switch (action.type) {
        case VERSION:
            return {
                currectversion: action.payload
            };
        default:
            return state;
    }

}