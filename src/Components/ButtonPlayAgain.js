import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PlayAgain = () => (
  <Link to="/" data-testid="btn-play-again">
    <button className="button buttonVerde">
      Jogar novamente
    </button>
  </Link>
);

export default PlayAgain;
