import { QUESTIONS, SUMBIT_ANSWER, QUESTIONS_NATURE } from '../actions/type';

const initialState = {
    questions: [],
    answer: []
};

export default (state = [], action) => {

    switch (action.type) {
        case QUESTIONS:
            return {
                ...state,
                questions: action.payload
            };
        case SUMBIT_ANSWER:
            return {
                ...state,
                answer: action.payload
            }
        case QUESTIONS_NATURE: {
            return {
                ...state,
                questionsnature: action.payload
            }
        }
        default:
            return state;
    }

}