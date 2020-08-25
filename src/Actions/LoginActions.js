import { MD5 } from 'crypto-js';
// import login from '../Services/ApiGravatar';
export const GET_GRAVATAR_SUCCESS = 'GET_GRAVATAR_SUCCESS';
const API = 'https://www.gravatar.com/avatar/';

export const getGravatarSuccess = (name, email) => ({
  type: GET_GRAVATAR_SUCCESS,
  gravatarLink: `${API}${MD5(email.toLowerCase())}`,
  name,
  email,
});
