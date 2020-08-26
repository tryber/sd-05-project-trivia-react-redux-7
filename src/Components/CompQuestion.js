import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CompQuestion extends Component {

  questionIndex = () => {
    const { questions } = this.props;
    if (questions.length > 0) {
      const { indexJogo } = this.props;
      return (
        <div>
          {(questions.map(questao => questao.question)[indexJogo])}
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.questionIndex()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questionReducer.questions,
  indexJogo: state.indexJogoReducer.indexJogo,
});

CompQuestion.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

export default connect(mapStateToProps)(CompQuestion);
