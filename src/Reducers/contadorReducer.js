import { RESETTIME, RESETSTATE } from '../Actions';

const INITIAL_STATE = {
  timeReset: false,
};

const contadorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESETTIME:
      return {
        ...state,
        timeReset: true,
      };
    case RESETSTATE:
      return {
        ...state,
        timeReset: false,
      };
    default:
      return state;
  }
};

export default contadorReducer;
