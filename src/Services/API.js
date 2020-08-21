// baseado no projeto shopping cart

const ApiQuestion = () => (
  fetch(`https://opentdb.com/api.php?amount=5&token=${localStorage.getItem('token')}`)
  .then((response) => response.json()
  .then((questions) => (response.ok ? Promise.resolve(questions) : Promise.reject(questions))))
);

export default ApiQuestion;
