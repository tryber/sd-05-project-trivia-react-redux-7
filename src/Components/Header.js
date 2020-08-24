import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {
    const { imagePath, player, score } = this.props;
    return (
      <header
        className="header"
      >
        <div className="player-avatar">
          <img
            src={imagePath}
            className="header-player-picture"
            data-testid="header-profile-picture"
            alt="Player`s avatar"
          />
          <p className="nickName" data-testid="header-player-name">
            Jogador: {player}
          </p>
        </div>
        <p className="scoreStyle" data-testid="header-player-score">
          Pontos: {score}
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  imagePath: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Header;
