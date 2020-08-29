import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CompCategoty extends Component {
  constructor(props) {
    super(props);
    this.categoryIndex = this.categoryIndex.bind(this);
  }

  categoryIndex() {
    const { questions } = this.props;
    const { indexJogo } = this.props;
    return (
      <div>
        {(questions.map((questao) => (questao.category))[indexJogo])}
      </div>
    );
  }

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
  questions: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  indexJogo: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(CompCategoty);
