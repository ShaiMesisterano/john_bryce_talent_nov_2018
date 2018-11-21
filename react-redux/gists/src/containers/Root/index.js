import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import App from '../../components/App';
import rootReducer from '../../reducers'

// store should include:
// 1. Reducer
// 2. Middleware 
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, createLogger())
);

// Provider - element for referring to the store
const Root = () => (
    <Provider store={store}> 
        <App />
    </Provider>
);

export default Root;