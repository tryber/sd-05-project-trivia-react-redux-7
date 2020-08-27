import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import FeedbackMessage from '../Components/FeedbackMessage';
import ButtonRanking from '../Components/ButtonRanking';
import PlayAgain from '../Components/ButtonPlayAgain';
import '../App.css';

class Feedback extends Component {
  render() {
    return (
      <div className="container">
        <Header score="20" />
        <FeedbackMessage wins={3} />
        <ButtonRanking />
        <PlayAgain />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    loginReducer: { isLogged, gravatarLink, name, email },
  } = state;
  return {
    isLogged,
    gravatarLink,
    name,
    email,
  };
};

export default connect(mapStateToProps)(Feedback);
