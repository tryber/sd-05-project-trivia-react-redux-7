import { MD5 } from 'crypto-js';
// import login from '../Services/ApiGravatar';
export const GET_GRAVATAR_SUCCESS = 'GET_GRAVATAR_SUCCESS';
const API = 'https://www.gravatar.com/avatar/';

export const getGravatarSuccess = (name, email) => ({
  type: GET_GRAVATAR_SUCCESS,
  gravatarLink:`${API}${MD5(email.toLowerCase())}`,
  name,
  email,
});

// export function getGravatarLink(email, name) {
//   return (dispatch) => {
//     dispatch(requestGravatar());
//     return login(email).then(
//       (playerGravatar) => dispatch(getGravatarSuccess(playerGravatar, name, email)),
//       (error) => dispatch(getGravatarFailure(error.message))
//     );
//   };
// }
// export default getGravatarSuccess;
