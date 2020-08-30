import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import indexJogoReducer from './indexJogoReducer';
import loginReducer from './gravatarReducer';
import answerReducer from './answerReducer';
import contadorReducer from './contadorReducer';

const rootReducer = combineReducers({
  answerReducer,
  questionReducer,
  indexJogoReducer,
  loginReducer,
  contadorReducer,
});

export default rootReducer;
