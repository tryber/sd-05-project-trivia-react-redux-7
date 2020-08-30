import React, { Component } from 'react';
import BotaoInicio from '../Components/BotaoInicio';
import UserRanking from '../Components/UserRanking';

export default class Ranking extends Component {
  render() {
    return (
      <div>
        <UserRanking />
        <BotaoInicio />
      </div>
    );
  }
}
