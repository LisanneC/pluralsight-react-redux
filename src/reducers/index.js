import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  // shorthand property names:
  courses
});

export default rootReducer;
