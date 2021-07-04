import {  PERSONAL_MARK,
    ALL_MARK } from '../actions/type';
    const initialState = {
        personal: [],
        allMark: []
    };
    
export default (state = initialState, action) => {

    switch (action.type) {
        case PERSONAL_MARK:
            return {
                ...state,
                personal: action.payload
            };
        case ALL_MARK:
            return {
                ...state,
                allMark: action.payload
            }
       
        default:
            return state;
    }

}