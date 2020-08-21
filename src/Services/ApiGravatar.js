// referencia https://github.com/brix/crypto-js
// plantao e slack Pedro Calado
<<<<<<< HEAD
import MD5 from 'crypto-js';
const CryptoJS = require("crypto-js");
const API = 'https://www.gravatar.com/avatar/';
const imagem = 'https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3';

const login = () => {
=======
const CryptoJS = require('crypto-js');

const API = 'https://www.gravatar.com/avatar/';
const imagem = 'https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3';

const login = (email) => {
>>>>>>> 179e4335089b9bd637ee8dd77c68501c22cd8a8d
  const hash = CryptoJS.MD5(email.toLowerCase().toString());
  if (hash === '') {
    return imagem;
  }
  return `${API}${hash}`;
};

export default login;
