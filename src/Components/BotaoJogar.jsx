import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import saveToLocalStorage from '../Services/saveToLocalStorage';

const BotaoJogar = ({buttonState, handleClick, name, email}) => (
  <Link to="/jogo">
    <button
      id="playButton" data-testid="btn-play" disabled={buttonState}
      className="button" 
      onClick={() => {
        handleClick();
        saveToLocalStorage(name, 0, 0, email);
      }}
    >
      Jogar
    </button>
  </Link>
);

BotaoJogar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BotaoJogar;