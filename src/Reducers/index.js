import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import indexJogoReducer from './indexJogoReducer';

const rootReducer = combineReducers({
  questionReducer,
  indexJogoReducer,
});
export default rootReducer;
