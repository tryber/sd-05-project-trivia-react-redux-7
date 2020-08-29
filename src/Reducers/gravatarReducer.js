import { GET_GRAVATAR_SUCCESS, SETSCORE, SETASSERTIONS } from '../Actions';
import saveToLocalStorage from '../Services/saveToLocalStorage';

const INITIAL_STATE = {
  isLogged: false,
  score: 0,
  assertions: 0,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GRAVATAR_SUCCESS:
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
<<<<<<< HEAD
    case SETASSERTIONS: {
=======
    case SETASSERTIONS:
>>>>>>> 7272cfab319d7e09a2adb6458b046c930e086f3e
      const newState = {
        ...state,
        assertions: state.assertions + 1,
      };
<<<<<<< HEAD
      saveToLocalStorage(newState.name, newState.assertions, newState.score, newState.email);
      return newState;
    }
=======
      saveToLocalStorage(newState.name, newState.assertions, newState.score , newState.email)
      return newState;
>>>>>>> 7272cfab319d7e09a2adb6458b046c930e086f3e
    default:
      return state;
  }
};

export default loginReducer;
