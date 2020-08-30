import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import UserRanking from '../Components/UserRanking';

export default class Ranking extends Component {
  render() {
    return (
      <div>
        <UserRanking />
        <Link to="/">
          <button data-testid="btn-go-home">
            Inicio
          </button>
        </Link>
      </div>
    );
  }
}
