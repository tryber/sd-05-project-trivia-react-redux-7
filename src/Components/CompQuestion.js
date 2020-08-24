import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    console.log(index)
    const questionIndex = () => {
      return(
        <div>
        .
          {console.log(questions)},
        </div>
      )
    }
    return (
      <div>
        {this.questionIndex()}
      </div>
    )     
  }
}

const mapStateToProps = (state) => ({
  questions: state.questionReducer.questions,
});

export default connect(mapStateToProps)(CompQuestion);
