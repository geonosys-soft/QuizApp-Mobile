import { CATEGORY_LIST } from '../actions/type';

export default (state = [], action) => {

    switch (action.type) {
        case CATEGORY_LIST:
            return {
                categorys: action.payload
            };
        default:
            return state;
    }

}