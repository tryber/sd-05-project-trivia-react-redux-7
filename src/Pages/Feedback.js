import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import FeedbackMessage from '../Components/FeedbackMessage';
import ButtonRanking from '../Components/ButtonRanking';
import PlayAgain from '../Components/ButtonPlayAgain';

class Feedback extends Component {
  render() {
    const {isLogged, gravatarLink, name, email,} = this.props;
    return (
      <div className="container">
        <Header
          imagePath={gravatarLink}
          player={name}
          score="20"
        />
        <FeedbackMessage wins={3} />
        <ButtonRanking />
        <PlayAgain />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loginReducer: {isLogged, gravatarLink, name, email } } = state;
  return {
    isLogged, gravatarLink, name, email,
  }
}

export default connect(mapStateToProps)(Feedback);
