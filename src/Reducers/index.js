import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import indexJogoReducer from './indexJogoReducer';
import loginReducer from './gravatarReducer';

const rootReducer = combineReducers({
  questionReducer,
  indexJogoReducer,
  loginReducer,
});

export default rootReducer;
