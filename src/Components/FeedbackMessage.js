import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Message = (props) => {
  const { message } = props;
  return (
    <p className="feedbackTitle" data-testid="feedback-text">
      {message}
    </p>
  );
};

const TotalScore = (props) => (
  <span className="feedbackText" data-testid="feedback-total-score">
    Um total de <span>{props.score}</span> pontos
  </span>
);

function messageByScore(wins) {
  return wins >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
}
class FeedbackMessage extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <Message message={messageByScore(assertions)} />
        <span className="feedbackText">Você acertou {assertions} questões!</span>
        <br />
        <TotalScore score={score} />
      </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
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
