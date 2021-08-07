import { 
    SOUND_PLAY,
    SOUND_STOP
   } from './type';
import Sound from 'react-native-sound';

const audioItem = require('../assets/music/bgLatest.mp3');
const buttonClick = require('../assets/music/btnsound.wav');
const correctAns = require('../assets/music/correct.wav');
const wrongAns = require('../assets/music/wrongbg.wav');
const clap = require('../assets/music/clap.wav')
var sound1, sound2, sound3, sound4, sound5;
  
  export const play = () => {
    
    return async function(dispatch) {
      sound1 = new Sound(audioItem, (error, xx) => {
        if (error) {
          alert('error', error + message);
          return;
        }
        sound1.play(() => {
          sound1.setNumberOfLoops(-1);
          sound1.play();
        })
      })
              dispatch({
                type: SOUND_PLAY,
                payload: "play"
              })
     }  
           
  }

  export const stop = () => {
    return async function(dispatch) {
    sound1.stop(() => {
        sound1.release()
      })

    dispatch({
      type: SOUND_STOP,
      payload: "play"
    })
 }
 
}

export const btnClick = () => {
  return async function(dispatch) {
    sound2 = new Sound(buttonClick, (error, xx) => {
      if (error) {
        alert('error', error + message);
        return;
      }
      sound2.play(() => {
        sound2.release()
      })
    })

  dispatch({
    type: SOUND_STOP,
    payload: "play"
  })
}

}

export const correctAnsCli = () => {
  return async function(dispatch) {
    sound3 = new Sound(correctAns, (error, xx) => {
      if (error) {
        alert('error', error + message);
        return;
      }
      sound3.play(() => {
        sound3.release()
      })
    })

  dispatch({
    type: SOUND_STOP,
    payload: "play"
  })
}

}

export const wrongAnsCli = () => {
  return async function(dispatch) {
    sound4 = new Sound(wrongAns, (error, xx) => {
      if (error) {
        alert('error', error + message);
        return;
      }
      sound4.play(() => {
        sound4.release()
      })
    })

  dispatch({
    type: SOUND_STOP,
    payload: "play"
  })
}

}

export const successClap = () => {
  return async function(dispatch) {
    sound5 = new Sound(clap, (error, xx) => {
      if (error) {
        alert('error', error + message);
        return;
      }
      sound5.play(() => {
        sound5.release()
      })
    })

  dispatch({
    type: SOUND_STOP,
    payload: "play"
  })
}

}