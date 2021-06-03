import { createStore, combineReducers } from 'redux';
import rootReducer from './root_reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));
export default configureStore;