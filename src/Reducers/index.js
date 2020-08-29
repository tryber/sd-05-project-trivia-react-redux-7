import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import indexJogoReducer from './indexJogoReducer';
import loginReducer from './gravatarReducer';
import answerReducer from './answerReducer';

const rootReducer = combineReducers({
  answerReducer,
  questionReducer,
  indexJogoReducer,
  loginReducer,
});

export default rootReducer;
