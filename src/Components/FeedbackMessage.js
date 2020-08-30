import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function messageByScore(wins) {
  return wins >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
}

const Message = (props) => {
  const { assertions } = props;
  return (
    <p className="feedbackTitle" data-testid="feedback-text">
      {messageByScore(assertions)}
    </p>
  );
};

const TotalScore = (props) => (
  <div className="feedbackText">
    Um total de <span data-testid="feedback-total-score">{props.score}</span> pontos
  </div>
);

class FeedbackMessage extends Component {
  styleCont() {
    const { assertions } = this.props;
    if (assertions >= 3) {
      return {
        color: 'rgb(0,128,128)',
        fontWeight: 'bold',
      };
    }
    return {
      color: 'rgb(212, 0, 0)',
      fontWeight: 'bold',
    };
  }

  render() {
    const { score, assertions } = this.props;
    return (
      <div style={this.styleCont()}>
        <Message assertions={assertions} />
        <div className="feedbackText">
          Você acertou <span data-testid="feedback-total-question">{assertions}</span> questões!
        </div>
        <br />
        <TotalScore score={score} />
      </div>
    );
  }
}

Message.propTypes = {
  assertions: PropTypes.number.isRequired,
};

TotalScore.propTypes = {
  score: PropTypes.number.isRequired,
};

FeedbackMessage.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.loginReducer.assertions,
  score: state.loginReducer.score,
});

export default connect(mapStateToProps)(FeedbackMessage);
