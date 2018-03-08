import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

const allReducers = combineReducers({
    tryValue: counterReducer,
});

export default allReducers;
