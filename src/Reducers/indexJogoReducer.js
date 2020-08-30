import { CHANGEINDEX, RESETINDEX } from '../Actions';

const INITIALSTATUS = {
  indexJogo: 0,
};

const indexJogoReducer = (state = INITIALSTATUS, action) => {
  switch (action.type) {
    case CHANGEINDEX:
      return {
        ...state,
        indexJogo: state.indexJogo + 1,
      };
    case RESETINDEX:
      return {
        ...state,
        indexJogo: 0,
      }
    default:
      return state;
  }
};

export default indexJogoReducer;
