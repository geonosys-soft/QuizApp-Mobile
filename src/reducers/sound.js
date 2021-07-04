import { 
    SOUND_PLAY,
    SOUND_STOP
   } from '../actions/type';

   export default (state = [], action) => {

    switch (action.type) {
      
        case SOUND_PLAY:
            return {
                playSound: action.payload
            };
            case SOUND_STOP:
              return {
                stopSound: action.payload
              };
              
        default:
            return state;
    }

}