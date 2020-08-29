import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

export default class Ranking extends Component {
  render() {
    return (
      <div>
        <Header />
        <title data-testid="ranking-title">Ranking</title>
        <Link to="/">
          <button type="button" data-testid="btn-go-home">
            Inicio
          </button>
        </Link>
      </div>
    );
  }
}
