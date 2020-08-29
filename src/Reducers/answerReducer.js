import { CHOOSE_ANSWER, RESET_ANSWER } from '../Actions';

const INITIAL_STATE = {
  respondido: false,
};

const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHOOSE_ANSWER:
      return {
        ...state,
        respondido: true,
      };
    case RESET_ANSWER:
      return {
        ...state,
        respondido: false,
      };
    default:
      return state;
  }
};

export default answerReducer;
