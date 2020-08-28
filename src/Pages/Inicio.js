// ref botao https://stackoverflow.com/questions/29951322/how-i-can-do-that
// -login-button-disappear-when-i-login-jquery
// ref geral - Grupo 10, Grupo 9 e slack
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGravatarSuccess } from '../Actions';
import EmailInput from '../Components/EmailInput';
import NameInput from '../Components/NameInput';
import { fechQuestion } from '../Actions';
import { ResultToken } from '../Services/API';

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
      <div className="campoInicial">
        <div className="inputInicial">
          <NameInput onChange={(event) => this.handleChange(event)} />
          <EmailInput onChange={(event) => this.handleChange(event)} />
        </div>
        <Link to="/config">
          <button
            id="settings" data-testid="btn-settings" disabled={this.buttonState()}
            className="button"
          >
            Configurações
          </button>
        </Link>
        <Link to="/jogo">
          <button
            id="playButton" data-testid="btn-play" disabled={this.buttonState()}
            className="button" onClick={() => {
              getGravatarAvatar(name, email);
              ResultToken();
            }}
          >
            Jogar
          </button>
        </Link>
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
  startNemQuestion: () => dispatch(fechQuestion()),
});

Inicio.propTypes = {
  login: PropTypes.string.isRequired,
  getGravatarAvatar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
