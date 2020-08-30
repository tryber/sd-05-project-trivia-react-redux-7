import { CHOOSE_ANSWER, RESET_ANSWER, BLOCK_ANSWER, UNBLOCK_ANSWER } from '../Actions';

const INITIAL_STATE = {
  respondido: false,
  blockAnswer: false,
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
    case BLOCK_ANSWER:
      return {
        ...state,
        blockAnswer: true,
      };
    case UNBLOCK_ANSWER:
      return {
        ...state,
        blockAnswer: false,
      };
    default:
      return state;
  }
};

export default answerReducer;
