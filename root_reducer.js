import { combineReducers } from 'redux';
import { sessionReducer } from './src/domain/session/reducer';


export default combineReducers({
    session: sessionReducer
});