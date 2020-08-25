import { GET_GRAVATAR_SUCCESS } from '../Actions';

const INITIAL_STATE = {
  isLogged: false,
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
    default:
      return state;
  }
};

export default loginReducer;
