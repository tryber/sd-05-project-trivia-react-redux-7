// baseado no projeto shopping cart

const ApiQuestion = () => (
  fetch(`https://opentdb.com/api.php?amount=5&token=${localStorage.getItem('token')}`)
<<<<<<< HEAD
  .then((response) => response.json())
  .then((result) => localStorage.setItem('question', JSON.stringify(result.results)));
};
=======
  .then((response) => response.json()
  .then((questions) => (response.ok ? Promise.resolve(questions) : Promise.reject(questions))))
);

export default ApiQuestion;
>>>>>>> 179e4335089b9bd637ee8dd77c68501c22cd8a8d
