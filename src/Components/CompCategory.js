import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CompCategoty extends Component {

  categoryIndex = () => {
    const { questions } = this.props;
    if (questions.length > 0) {
      const { indexJogo } = this.props;
      return (
        <div>
          {(questions.map(questao => questao.category)[indexJogo])}
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.categoryIndex()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questionReducer.questions,
  indexJogo: state.indexJogoReducer.indexJogo,
});

CompCategoty.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

export default connect(mapStateToProps)(CompCategoty);