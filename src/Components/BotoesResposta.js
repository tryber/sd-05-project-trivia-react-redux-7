// referência https://github.com/tryber/sd-03-project-trivia-react-redux-05/pull/10

import React, { Component } from 'react'
import PropTypes from 'prop-types';

function RespostaCorreta(props) {
  const { stateButton, style, correctText } = props;
  return (
    <button data-testid={`correct-answer`} className="buttonCorrectAnswer"
      onClick={() => stateButton()} style={style} type="button">
      {correctText}
    </button>
  )
}

function RespostaErrada(props) { 
  const { stateButton, style, incorrectText, index } = props;  
  return (
    <button data-testid={`wrong-answer-${index}`} className="buttonWrongAnswer"
      onClick={() => stateButton()} style={style} type="button">
      {incorrectText}
    </button>
  );
}

class BotoesResposta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      respondido: false,
    };
  }

  stateButton() {
    this.setState({respondido: true})
  }

  styleButton(tipo) {
    if(this.state.respondido) {
      if(tipo === "correto") {
        return ({ border: '3px solid rgb(6, 240, 15)' });
        }
        return ({ border: '3px solid rgb(255, 0, 0)' });
    }
    return {};
  }


/*   wrongButton = () => { 
    const { questions } = this.props;
    const { indexJogo } = this.props;
    const questaoAtual = questions[indexJogo];
    if (questions.length > 0) {
      const incorrectItems = questions.map(questao => questao.incorrect_answers)[indexJogo];
      console.log(incorrectItems)
      return incorrectItems.map((item, index) => {
        return (
        <button type="button" data-testid={`wrong-answer-${index}`} style={this.styleButton()}
            onClick={() => this.stateButton()} className="buttonWrongAnswer">
            {item}
          </button>
        )
      })
    }
  } */

  shuffle(optionArray) {
    let counter = optionArray.length;
    let newArray = [];
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        
        // Decrease counter by 1
        counter--;
        if (newArray.includes(optionArray[index])) {
          counter += 1
        } else {
          newArray.push(optionArray[index])
        } 
    }
    return newArray;
  }

  render() {
    const { correct_answer, incorrect_answers } = this.props;
    console.log(incorrect_answers)
    return (
      <div>
        { this.shuffle([ 
          ...incorrect_answers.map((answar, index) => <RespostaErrada incorrectText={answar} stateButton={() => this.stateButton()} index={index} style={this.styleButton()} />),
        <RespostaCorreta correctText={correct_answer} stateButton={() => this.stateButton()} style={this.styleButton("correto")} />])}
      </div>
    )
  }
}

/* BotoesResposta.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
}; */

export default BotoesResposta;