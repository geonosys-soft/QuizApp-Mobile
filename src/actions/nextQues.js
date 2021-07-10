import {NEXT_QUESTION, QUESTIONS, SCIENCE_QUE,HISTORY_QUE,NATURE_QUE} from './type'

export const newCount = (count, questions) => {
    console.log("new count", count);

    if ( count <= 9) {
            questionS = questions[count].Question;
            optionAS = questions[count].OPA;
            optionBS = questions[count].OPB;
            optionCS = questions[count].OPC;
            optionDS = questions[count].OPD;
            correctAnsS = questions[count].ANSWER;
            markS = questions[count].MARK;
            nmarkS = questions[count].NMARK;

           var result = {
                questionData: questionS,
                optA: optionAS,
                optB: optionBS,
                optC: optionCS,
                optD: optionDS,
                answerOtn: correctAnsS,
                markData: markS,
                nmarkData: nmarkS
            }
        }
    return {
        type: NEXT_QUESTION,
        payload: result
        
    }
}

export const storeCleaner = () => {
   
    return {
        type: NEXT_QUESTION,
        payload: []
        
    }
}

export const clearQuestions = () => {
   
    return {
        type: QUESTIONS,
        payload: []
        
    }
}

export const clearScienceQues = () => {
   
    return {
        type: SCIENCE_QUE,
        payload: []
        
    }
}

export const clearHistoryQues = () => {
   
    return {
        type: HISTORY_QUE,
        payload: []
        
    }
}

export const clearNatureQues = () => {
   
    return {
        type: NATURE_QUE,
        payload: []
        
    }
}

