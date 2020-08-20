// baseado no projeto shopping cart
const API = 'https://opentdb.com/api_token.php?command=request';
const OBJ = { method: 'GET' };

export const ResultToken = () => {
  fetch(API, OBJ)
    .then((response) => response.json())
    .then((result) => localStorage.setItem('token', result.token));
};

export const Api_Question = () => {
  fetch(`https://opentdb.com/api.php?amount=5&token=${localStorage.getItem('token')}`)
  .then(response) => response.json())
  .then((result) => localStorage.setItem('question', JSON.stringify(result.results)));
};
