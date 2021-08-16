import { 
  LOGIN_OPE,
  SIGN_UP,
  USER_DETAILS,
  GOOGLE_LOGIN,
  SHOW_LOADER
 } from '../actions/type';

 const initialState = {
  login: [],
  signup: [],
  loginsucess:[],
  userDetails:[],
  showLoader: true

 }

export default (state = initialState, action) => {

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
              case SHOW_LOADER:
                return {
                    ...state,
                    showLoader: action.payload
                }
        default:
            return state;
    }

}