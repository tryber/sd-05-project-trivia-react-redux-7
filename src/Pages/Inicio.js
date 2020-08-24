// ref botao https://stackoverflow.com/questions/29951322/how-i-can-do-that
// -login-button-disappear-when-i-login-jquery
// ref geral - Grupo 10, Grupo 9 e slack
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.botao = this.botao.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleEmail(event) {
    const { email, value } = event.target;
    this.setState({ [email]: value });
  }

  botao() {
    const { name, email } = this.state;
    if (!email || !name) return true;
    return false;
  }

  render() {
    const { name, email } = this.state;
    const { login } = this.props;
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input
          name="jogador"
          type="text"
          data-testid="input-player-name"
          onChange={(event) => this.handleChange(event)}
        />
        <label htmlFor="email">Email</label>
        <input
          name="login"
          type="email"
          data-testid="input-gravatar-email"
          onChange={(event) => this.handleEmail(event)}
        />
        <button id="playButton" data-testid="btn-play">Jogar</button>
        <button 
          id="settings"
          data-testid="btn-settings"
          disable={this.botao()}
          onClick={() => login(name, email)}
        >Configurações</button>
        <Link to="/Config">
          <button data-tesid="btn-settings">Configurações</button>
        </Link>
      </div>
    );
  }
}

Inicio.propTypes = {
  login: PropTypes.string.isRequired,
};

export default Inicio;
