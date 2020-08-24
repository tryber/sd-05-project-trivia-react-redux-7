import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CompQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    const { questions } = this.props;
    console.log(questions);
    const { index } = this.state;
    console.log(index);
/*     questionIndex = () => {
      return (
        <div>
          {console.log(questions)},
        </div>
      );
    }; */
    return (
      <div>
        .this.questionIndex
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questionReducer.questions,
});

CompQuestion.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

export default connect(mapStateToProps)(CompQuestion);
