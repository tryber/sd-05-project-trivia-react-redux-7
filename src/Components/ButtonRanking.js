import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonRanking.css';

const ButtonRanking = () => (
  <Link to="/ranking" data-testid="btn-ranking" className="button-ranking">
    Ver Ranking
  </Link>
);

export default ButtonRanking;
