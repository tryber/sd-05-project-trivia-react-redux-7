import React, { Component } from 'react';
<<<<<<< HEAD
=======
import Header from '../Components/Header';
import FeedbackMessage from '../Components/FeedbackMessage';
>>>>>>> ddd94cc4878e4f7a1e4e2b57707e5423659cb8df

export default class feedback extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        .
=======
      <div className="container">
        <Header
          imagePath="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          player="Jogador Qualquer"
          score="20"
        />
        <FeedbackMessage wins={3} />
>>>>>>> ddd94cc4878e4f7a1e4e2b57707e5423659cb8df
      </div>
    );
  }
}
