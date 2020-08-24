import React, { Component } from 'react';

const Message = (props) => {
  const { message } = props;
  return <p data-testid='feedback-test'>{message}</p>;
};

const TotalScore = (props) => {
  return (
    <span data-testid='deedback-total-score'>
      Um total de <span>{props.score}</span> pontos
    </span>
  );
};

class FeedbackMessage extends Component {
  constructor(props) {
    super(props);
  }

  messageByScore = (wins) => {
    return wins >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
  };

  render() {
    const { wins } = this.props;
    return (
      <div>
        <Message message={this.messageByScore(3)} />
        <span>Você acertou {wins} questões!</span>
        <TotalScore score={'50'} />
      </div>
    );
  }
}

export default FeedbackMessage;
