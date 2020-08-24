import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './Header.css';

const headerStyle = {
  alignItems: 'center',
  // border: "1px black solid",
  display: 'inline-flex',
  height: '70px',
  justifyContent: 'space-around',
  left: '0',
  padding: '0 5px',
  position: 'absolute',
  top: '0',
  width: '100%',
};

const nickName = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '26px',
  lineHeight: '30px',
};

const imgStyle = {
  // border: "1px black solid",
  height: '50px',
  margin: '0 5px 0 0',
};

const scoreStyle = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '30px',
  lineHeight: '30px',
};

const playerAvatar = {
  alignItems: 'center',
  display: 'inline-flex',
};

class Header extends Component {
  render() {
    const { imagePath, player, score } = this.props;
    return (
      <header className="header" style={headerStyle}>
        <div className="player-avatar" style={playerAvatar}>
          <img
            src={imagePath}
            className="header-player-picture"
            data-testid="header-profile-picture"
            alt="Player`s avatar"
            style={imgStyle}
          />
          <p className={nickName} data-testid="header-player-name">
            Jogador: {player}
          </p>
        </div>
        <p className={scoreStyle} data-testid="header-player-score">
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
}

export default Header;
