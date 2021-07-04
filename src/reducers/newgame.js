import { NEW_GAME } from '../actions/type';

export default (state = [], action) => {

    switch (action.type) {
        case NEW_GAME:
            return {
                newgame: action.payload
            };
       
        default:
            return state;
    }

}