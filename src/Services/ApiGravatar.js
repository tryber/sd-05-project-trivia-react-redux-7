// referencia https://github.com/brix/crypto-js
// plantao e slack Pedro Calado
import { MD5 } from 'crypto-js';

const API = 'https://www.gravatar.com/avatar/';

function login(email) {
  return fetch(`${API}${MD5(email.toLowerCase())}`).then((response) =>
    response
      .json()
      .then((json) => json)
      .catch((error) => error),
  );
}

export default login;
