import { CHANGEINDEX } from '../Actions';

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
    default:
      return state;
  }
};

export default indexJogoReducer;
