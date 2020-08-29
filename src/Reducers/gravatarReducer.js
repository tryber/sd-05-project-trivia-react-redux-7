import { GET_GRAVATAR_SUCCESS, SETSCORE, SETASSERTIONS } from '../Actions';

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
    case SETASSERTIONS:
      return {
        ...state,
        assertions: state.assertions + 1,
      };
    default:
      return state;
  }
};

export default loginReducer;
