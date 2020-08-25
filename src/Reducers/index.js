import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import loginReducer from './gravatarReducer';

const rootReducer = combineReducers({
  questionReducer,
  loginReducer,
});
export default rootReducer;
