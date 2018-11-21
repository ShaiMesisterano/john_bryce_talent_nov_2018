import { combineReducers } from 'redux';

const initialState = {
    gists: []
};

const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GISTS':
            return {
                ...state,
                gists: action.gists
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({ gistsReducer });

export default rootReducer;