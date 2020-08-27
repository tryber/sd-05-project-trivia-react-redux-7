import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { message } = props;
  return <p className="feedbackTitle" data-testid="feedback-test">{message}</p>;
};

const TotalScore = (props) => (
  <span className="feedbackText" data-testid="deedback-total-score">
    Um total de <span>{props.score}</span> pontos
  </span>
);

function messageByScore(wins) {
  return wins >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
}
class FeedbackMessage extends Component {
  render() {
    const { wins } = this.props;
    return (
      <div>
        <Message message={messageByScore(wins)} />
        <span className="feedbackText">Você acertou {wins} questões!</span><br />
        <TotalScore score={'50'} />
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
  wins: PropTypes.number.isRequired,
};

export default FeedbackMessage;
