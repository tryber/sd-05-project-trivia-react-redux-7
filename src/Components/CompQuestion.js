import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BotoesResposta from './BotoesResposta';
import '../App.css';

export default class CompQuestion extends Component {
  render() {
    return (
      <div>
        <div className="campoPergunta">
          {this.props.question}
        </div>
        <div className="alternativas">
          <BotoesResposta
            correctAnswer={this.props.correct_answer}
            incorrectAnswers={this.props.incorrect_answers}
          />
        </div>
      </div>
    );
  }
}


CompQuestion.propTypes = {
  question: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correct_answer: PropTypes.string.isRequired,
};
