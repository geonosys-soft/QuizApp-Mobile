import { 
  LOGIN_OPE,
  SIGN_UP,
  USER_DETAILS,
  GOOGLE_LOGIN
 } from '../actions/type';

export default (state = [], action) => {

    switch (action.type) {
      
        case LOGIN_OPE:
            return {
                login: action.payload
            };
            case SIGN_UP:
              return {
                signup: action.payload
              };
              case GOOGLE_LOGIN:
                return {
                  loginsucess: action.payload
                }
            case USER_DETAILS:
              return {
                userDetails: action.payload
              }
        default:
            return state;
    }

}