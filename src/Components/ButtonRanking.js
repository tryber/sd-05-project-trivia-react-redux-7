import React from 'react';
import { Link } from 'react-router-dom';

const ButtonRanking = () => (
  <Link to="/ranking" data-testid="btn-ranking" className="button-ranking">
    <button className="button">
      Ver Ranking
    </button>
  </Link>
);

export default ButtonRanking;
