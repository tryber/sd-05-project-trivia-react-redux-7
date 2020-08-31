import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {
    const { gravatarLink, name, score } = this.props;
    return (
      <header className="header">
        <div className="player-avatar">
          <img
            src={gravatarLink}
            className="header-player-picture"
            data-testid="header-profile-picture"
            alt="Player`s avatar"
          /><br />
          <p className="nickName" data-testid="header-player-name">
            Jogador: {name}
          </p>
        </div>
        <div className="containerScore">
          <p>Pontos:</p>
          <p className="scoreStyle" data-testid="header-score">
            {score}
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    loginReducer: { gravatarLink, name, score, assertions },
  } = state;

  return {
    gravatarLink,
    name,
    score,
    assertions,
  };
};

Header.propTypes = {
  gravatarLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
