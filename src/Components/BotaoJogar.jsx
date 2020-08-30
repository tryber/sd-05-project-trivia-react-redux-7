import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BotaoJogar = ({ buttonState, handleClick, name, email }) => (
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
  name: PropTypes.string.isRequired,
  buttonState: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default BotaoJogar;
