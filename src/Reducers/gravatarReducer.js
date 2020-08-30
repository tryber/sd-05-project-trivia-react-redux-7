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
      const newState = {
        ...state,
        gravatarLink: action.gravatarLink,
        name: action.name,
        email: action.email,
        isLogged: true,
      };
      saveToLocalStorage(newState.name, 0, 0, newState.email);
      return newState;
    case SETSCORE:
      return {
        ...state,
        score: state.score + 10,
      };
    case SETASSERTIONS: {
      const newState = {
        ...state,
        assertions: state.assertions + 1,
      };
      saveToLocalStorage(newState.name, newState.assertions, newState.score, newState.email);
      return newState;
    }
    default:
      return state;
  }
};

export default loginReducer;
