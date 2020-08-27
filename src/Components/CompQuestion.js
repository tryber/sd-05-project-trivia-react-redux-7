import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BotoesResposta from './BotoesResposta';
import '../App.css'

export default class CompQuestion extends Component {
  render() {
    const { correct_answer, incorrect_answers, question } = this.props;
    return (
      <div>
        <div className="campoPergunta">
          {question}
        </div>
        <div className="alternativas">
          <BotoesResposta correct_answer={correct_answer} incorrect_answers={incorrect_answers}/>
        </div>
      </div>
    );
  }
}


/* CompQuestion.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
}; */
