import * as actionTypes from '../actions/action';

const initialState = {
    isLoggedIn: false,
    userName: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                userName: action.username
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                userName: null
            }
        default:
            return state;
    }
};

export default reducer;