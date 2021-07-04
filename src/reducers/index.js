import { combineReducers } from 'redux';

import login from './login';
import catagoryList from './catagorylist';
import questions from './questions';
import totalScore from './totalScore';
import sound from './sound';
import newgame from './newgame';
import leadingboard from './leadingboard';
import questionsNature from './qustionNature';
import qustionHistory from './qustionHistory';
import questionScience from './questionScience';
import versionupgrade from './versionupgrade';
import nextQues from './nextQues';
import userdetails from './userdetails';

export default  combineReducers({

    catagoryList,
    login,
    questions,
    totalScore,
    sound,
    newgame,
    leadingboard,
    questionsNature,
    qustionHistory,
    questionScience,
    versionupgrade,
    nextQues,
    userdetails
});

