// baseado no projeto shopping cart
const API = 'https://opentdb.com/api_token.php?command=request';
const OBJ = { method: 'GET' };

export const ResultToken = () => {
  fetch(API, OBJ)
    .then((response) => response.json()
      .then((result) => localStorage.setItem('token', result.token))
    )
};

export const ApiQuestion = () => (
  fetch(`https://opentdb.com/api.php?amount=5&token=${localStorage.getItem('token')}`)
<<<<<<< HEAD
  .then((response) => response.json())
  .then((result) => localStorage.setItem('question', JSON.stringify(result.results)));
};
=======
  .then((response) => response.json()
    .then((questions) => (response.ok ? Promise.resolve(questions) : Promise.reject(questions)))
  )
);
<<<<<<< HEAD

export default ApiQuestion;
>>>>>>> 179e4335089b9bd637ee8dd77c68501c22cd8a8d
=======
>>>>>>> 81e0778f3096a8088696d6da034755e7b90fd6f4
