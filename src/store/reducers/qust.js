import * as actionTypes from '../actions/action';

const initialState = {
    techStack: 'html',
    questions: [],
    questionId: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECTTECH:
            return {
                ...state,
                techStack: action.techStack
            }
        case actionTypes.LOADQUESTIONS:
            return {
                ...state,
                questions: action.questions
            }
        case actionTypes.SELECTQUESTION:
            return {
                ...state,
                questionId: action.questionId
            }
        case actionTypes.CLICKOTHERQUESTION:
            return {
                ...state,
                questionId: state.questionId + action.changeId
            }
        default:
            return state;
    }
};

export default reducer;