// ref botao https://stackoverflow.com/questions/29951322/how-i-can-do-that
// -login-button-disappear-when-i-login-jquery
// ref geral - Grupo 10, Grupo 9 e slack
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGravatarSuccess } from '../Actions';

class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.buttonState = this.buttonState.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  buttonState() {
    const { name, email } = this.state;
    if (email === '' || name === '') return true;
    return false;
  }

  render() {
    const { name, email } = this.state;
    const { login, getGravatarAvatar } = this.props;
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          data-testid="input-player-name"
          onChange={(event) => this.handleChange(event)}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          data-testid="input-gravatar-email"
          onChange={(event) => this.handleChange(event)}
        />
        <Link to="/jogo">
          <button
            id="playButton"
            data-testid="btn-play"
            disabled={this.buttonState()}
            onClick={() => {
              getGravatarAvatar(name, email);
            }}
          >
            Jogar
          </button>
        </Link>
        <button
          id="settings"
          data-testid="btn-settings"
          disabled={this.buttonState()}
          onClick={() => login(name, email)}
        >
          Configurações
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.loginReducer.isLogged,
  name: state.loginReducer.name,
  email: state.loginReducer.email,
});

const mapDispatchToProps = (dispatch) => ({
  getGravatarAvatar: (email, name) => dispatch(getGravatarSuccess(email, name)),
});

Inicio.propTypes = {
  login: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  getGravatarAvatar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
