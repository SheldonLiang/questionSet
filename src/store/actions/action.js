export const LOGIN = 'LOGIN';
export const SELECTTECH = "SELECTTECH";
export const LOADQUESTIONS = "LOADQUESTIONS";
export const SELECTQUESTION = "SELECTQUESTION";
export const CLICKOTHERQUESTION = "CLICKOTHERQUESTION";
export const LOGOUT = 'LOGOUT';

export const login = (name, isLogged) => {
    return {
        type: LOGIN,
        username: name,
        isLoggedIn: isLogged
    };
};

export const selectTech = (tech) => {
    return {
        type: SELECTTECH,
        techStack: tech
    };
};

export const loadQuestions = (questions) => {
    return {
        type: LOADQUESTIONS,
        questions: questions
    };
};

export const selectQuestion = (id) => {
    return {
        type: SELECTQUESTION,
        questionId: id
    };
};

export const clickOtherQuestion = (changeId) => {
    return {
        type: CLICKOTHERQUESTION,
        changeId: changeId
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
        isLoggedIn: false
    };
};