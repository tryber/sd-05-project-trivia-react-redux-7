import { GET_GRAVATAR_SUCCESS, SETSCORE, SETASSERTIONS } from '../Actions';
import { saveToLocalStorage } from '../Services/saveToLocalStorage';

const INITIAL_STATE = {
  isLogged: false,
  score: 0,
  assertions: 0,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GRAVATAR_SUCCESS:
      saveToLocalStorage(action.name, 0, 0, action.email);
      return {
        ...state,
        gravatarLink: action.gravatarLink,
        name: action.name,
        email: action.email,
        isLogged: true,
      };
    case SETSCORE:
      return {
        ...state,
        score: state.score + 10,
      };
    case SETASSERTIONS:
      saveToLocalStorage(state.name, state.assertions, state.score, state.email);
      return {
        ...state,
        assertions: state.assertions + 1,
      };
    default:
      return state;
  }
};

export default loginReducer;
