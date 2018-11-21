import { combineReducers } from 'redux';

const initialState = {
    gists: []
};

const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GISTS':
            return {
                ...state,
                gists: [{
                    name: "Name888",
                    author: "Author888"
                },
                {
                    name: "Name2",
                    author: "Author2"
                },
                {
                    name: "Name3",
                    author: "Author3"
                }]
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({ gistsReducer });

export default rootReducer;