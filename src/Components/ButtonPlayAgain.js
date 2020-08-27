import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonPlayAgain.css';

const PlayAgain = () => (
  <Link to="/" data-testid="btn-play-again" className="button-play-again">
    Jogar novamente
  </Link>
);

export default PlayAgain;
