import { START_NEW_QUESTION, START_NEW_QUESTION_FAILURE, START_NEW_QUESTION_SUCCESS } from '../Actions';

const INITIALSTATE = {
  isFetching: false,
  questions: 0,
};

const questionReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case START_NEW_QUESTION:
      return {
        ...state,
        isFetching: true,
      };
    case START_NEW_QUESTION_SUCCESS:
      return {
        ...state,
        questions: action.questions,
        isFetching: false,
      };
    case START_NEW_QUESTION_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default questionReducer;
