import React, { Component } from 'react';
import Header from '../Components/Header';
import FeedbackMessage from '../Components/FeedbackMessage';

export default class feedback extends Component {
  render() {
    return (
      <div className="container">
        <Header
          imagePath='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
          player='Jogador Qualquer'
          score='20'
        />
        <FeedbackMessage wins={3} />

      </div>
    );
  }
}