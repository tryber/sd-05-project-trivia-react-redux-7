import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BotaoJogar = ({ buttonState, handleClick }) => (
  <Link to="/jogo">
    <button
      id="playButton" data-testid="btn-play" disabled={buttonState}
      className="button"
      onClick={() => {
        handleClick();
      }}
    >
      Jogar
    </button>
  </Link>
);

BotaoJogar.propTypes = {
  buttonState: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BotaoJogar;
