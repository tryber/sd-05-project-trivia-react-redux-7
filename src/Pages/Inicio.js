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
import BotaoJogar from '../Components/BotaoJogar';

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
    const { getGravatarAvatar } = this.props;
    return (
      <div className="campoInicial">
        <div className="inputInicial">
          <NameInput onChange={(event) => this.handleChange(event)} />
          <EmailInput onChange={(event) => this.handleChange(event)} />
        </div>
        <Link to="/config">
          <button
            id="settings" data-testid="btn-settings" className="button"
          >
            Configurações
          </button>
        </Link>
        <BotaoJogar 
          name={name}
          email={email}
          buttonState={this.buttonState()}
          handleClick={() => {
            getGravatarAvatar(name, email);
            ResultToken();
          }}
        />
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
  getGravatarAvatar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
