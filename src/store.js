import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import postsReducer from './reducers/postsReducer';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
    postsReducer, userReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;