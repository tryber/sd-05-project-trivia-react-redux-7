// referência https://github.com/tryber/sd-03-project-trivia-react-redux-05/pull/10

import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BotoesResposta extends Component {

  correctButton() {
    const { questions } = this.props;
    const { indexJogo } = this.props;
    if (questions.length > 0) {
      return(
        <div>
          <button data-testid={`correct-answer`} type="button">
            {(questions.map(questao => questao.correct_answer)[indexJogo])}
          </button>
        </div>
      )
    }
  };

  wrongButton() {
    const { questions } = this.props;
    const { indexJogo } = this.props;
    if (questions.length > 0) {
      let incorrectItems = questions.map(questao => questao.incorrect_answers)[indexJogo];
      for (var index = 0; index < incorrectItems.length ; index = index + 1){
        return(
          <div>
            <button data-testid={`wrong-answer-${index}`} type="button">{incorrectItems[index]}</button>
          </div>
        )
      }
    }
  }


  render() {
    return (
      <div>
        {this.correctButton()}
        {this.wrongButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questions: state.questionReducer.questions,
  indexJogo: state.indexJogoReducer.indexJogo,
});

BotoesResposta.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

export default connect(mapStateToProps)(BotoesResposta);
