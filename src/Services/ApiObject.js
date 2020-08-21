// baseado no projeto shopping cart
const API = 'https://opentdb.com/api_token.php?command=request';
const OBJ = { method: 'GET' };

const ResultToken = () => {
  fetch(API, OBJ)
    .then((response) => response.json())
    .then((result) => localStorage.setItem('token', result.token));
};

export default ResultToken;
