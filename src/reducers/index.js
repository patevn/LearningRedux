import { combineReducers } from 'redux';
import courses from './courseReducer';

//this is the root reducer, its required when you have more than one reducer (which we will soon)
const rootReducer = combineReducers({
    courses: courses
});

export default rootReducer;