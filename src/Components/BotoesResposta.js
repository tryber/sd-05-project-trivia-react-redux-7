// referência https://github.com/tryber/sd-03-project-trivia-react-redux-05/pull/10
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { chooseAnswer, setScore, setAssertions } from '../Actions';
import saveToLocalStorage from '../Services/saveToLocalStorage';

function shuffle(optionArray) {
  /* Essa função recebe um array de objetos, e retorna um novo array do mesmo
  com a ordem deles alterada. */
  let oldArray = [...optionArray];
  const newArray = [];
  // While there are elements in the array
  while (oldArray.length > 0) {
    // Pick a random index
    if (oldArray.length === 1) {
      newArray.push(...oldArray);
      oldArray = [];
    } else {
      const index = Math.floor(Math.random() * (oldArray.length - 1));
      // Decrease counter by 1
      newArray.push(oldArray[index]);
      oldArray.splice(index, 1);
    }
  }
  return newArray;
}

function questionArray(questionsWrong, questionCorrect) {
  /* Essa função recebe dois parãmetros, questionWrong deve ser um array de strings
  questionCorrect, que dever ser a string da resposta correta.
  E retorna um array de objetos com todas as respostas dentro, no seguinte formato:
  [{
    question: string,
    idx: indice da resposta,
    typeQuestion: booleano (true, a questão é verdadeira, false, ela é falsa),
  }] */
  let newArray = [];
  newArray = [...questionsWrong.map((question, idx) => ({ question, idx, typeQuestion: false }))];
  newArray.push({ question: questionCorrect, idx: questionsWrong.length, typeQuestion: true });
  return shuffle(newArray);
}

class BotoesResposta extends Component {
  styleButton(tipo) {
    if (this.props.respondido) {
      if (tipo === 'correto') {
        return { border: '3px solid rgb(6, 240, 15)' };
      }
      return { border: '3px solid rgb(255, 0, 0)' };
    }
    return {};
  }

  RespostaCorreta(props) {
    /* função que retorna um componente que tem a resposta como correta
    ele deve receber um objeto que tenha a key question com a string
    da resposta correta */
    const { question } = props;
    const { name, gravatarEmail, assertions, score, handleClick, choosingAnswer, respondido, setingScore, setingAssertions } = this.props;
    return (
      <button
        data-testid={'correct-answer'}
        className="buttonCorrectAnswer"
        onClick={() => {
          choosingAnswer();
          setingScore();
          setingAssertions();
          if (!respondido) {
            handleClick();
            console.log(assertions, score);
            // saveToLocalStorage(name, assertions +1 , score + 10 , gravatarEmail);
          }
        }}
        disabled={respondido}
        style={this.styleButton('correto')}
        type="button"
      >
        {question}
      </button>
    );
  }

  RespostaErrada(props) {
    /* função que retorna um componente que te a resposta errada,
    ele deve receber um objeto que tenha as keys question (com a string da resposta)
    idx, que é o indice da respostar */
    const { question, idx } = props;
    const { handleClick, choosingAnswer, respondido } = this.props;
    return (
      <button
        data-testid={`wrong-answer-${idx}`}
        className="buttonWrongAnswer"
        disabled={respondido}
        onClick={() => {
          choosingAnswer();
          if (!respondido) handleClick();
        }}
        style={this.styleButton()}
        type="button"
      >
        {question}
      </button>
    );
  }

  render() {
    const { correctAnswer, incorrectAnswers } = this.props;
    const shuffledAnswers = questionArray(incorrectAnswers, correctAnswer);
    return (
      <div>
        {shuffledAnswers.map((answer) => {
          if (answer.typeQuestion) {
            return this.RespostaCorreta(answer);
          }
          return this.RespostaErrada(answer);
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  respondido: state.answerReducer.respondido,
  name: state.loginReducer.name,
  assertions: state.loginReducer.assertions,
  score: state.loginReducer.score,
  gravatarEmail: state.loginReducer.email,
});

const mapDispatchToProps = (dispatch) => ({
  choosingAnswer: () => dispatch(chooseAnswer()),
  setingScore: () => dispatch(setScore()),
  setingAssertions: () => dispatch(setAssertions()),
});

BotoesResposta.propTypes = {
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswer: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  respondido: PropTypes.bool.isRequired,
  choosingAnswer: PropTypes.func.isRequired,
  setingScore: PropTypes.func.isRequired,
  setingAssertions: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BotoesResposta);
