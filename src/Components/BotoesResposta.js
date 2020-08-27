// referência https://github.com/tryber/sd-03-project-trivia-react-redux-05/pull/10

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BotoesResposta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      respondido: false,
    };
  }

  stateButton() {
    this.setState({ respondido: true });
  }

  styleButton(tipo) {
    if (this.state.respondido) {
      if (tipo === 'correto') {
        return { border: '3px solid rgb(6, 240, 15)' };
      }
      return { border: '3px solid rgb(255, 0, 0)' };
    }
    return {};
  }

  RespostaCorreta(props) {
    /*função que retorna um componente que tem a resposta como correta
    ele deve receber um objeto que tenha a key question com a string 
    da resposta correta*/
    const { question } = props;
    return (
      <button
        data-testid={`correct-answer`}
        className="buttonCorrectAnswer"
        onClick={() => this.stateButton()}
        style={this.styleButton('correto')}
        type="button"
      >
        {question}
      </button>
    );
  }

  RespostaErrada(props) {
    /*função que retorna um componente que te a resposta errada,
    ele deve receber um objeto que tenha as keys question (com a string da resposta)
    idx, que é o indice da respostar*/
    const { question, idx } = props;
    return (
      <button
        data-testid={`wrong-answer-${idx}`}
        className="buttonWrongAnswer"
        onClick={() => this.stateButton()}
        style={this.styleButton()}
        type="button"
      >
        {question}
      </button>
    );
  }

  shuffle(optionArray) {
    /*Essa função recebe um array de objetos, e retorna um novo array do mesmo
    com a ordem deles alterada. */
    let oldArray = [...optionArray];
    let newArray = [];
    // While there are elements in the array
    while (oldArray.length > 0) {
      // Pick a random index
      if (oldArray.length === 1) {
        newArray.push(...oldArray);
        oldArray = [];
      } else {
        let index = Math.floor(Math.random() * (oldArray.length - 1));
        // Decrease counter by 1
        newArray.push(oldArray[index]);
        oldArray.splice(index, 1);
      }
    }
    return newArray;
  }

  questionArray(questionsWrong, questionCorrect) {
    /*Essa função recebe dois parãmetros, questionWrong deve ser um array de strings
    questionCorrect, que dever ser a string da resposta correta.
    E retorna um array de objetos com todas as respostas dentro, no seguinte formato:
    [{
      question: string,
      idx: indice da resposta,
      typeQuestion: booleano (true, a questão é verdadeira, false, ela é falsa),
    }]
    */
    let newArray = [];
    newArray = [...questionsWrong.map((question, idx) => ({ question, idx, typeQuestion: false }))];
    newArray.push({ question: questionCorrect, idx: questionsWrong.length, typeQuestion: true });
    return this.shuffle(newArray);
  }

  render() {
    const { correct_answer, incorrect_answers } = this.props;
    const shuffledAnswers = this.questionArray(incorrect_answers, correct_answer);
    return (
      <div>
        {shuffledAnswers.map((answer) =>
          answer.typeQuestion ? this.RespostaCorreta(answer) : this.RespostaErrada(answer),
        )}
      </div>
    );
  }
}

BotoesResposta.propTypes = {
  incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  correct_answer: PropTypes.string,
};

export default BotoesResposta;
