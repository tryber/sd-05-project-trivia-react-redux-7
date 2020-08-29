import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import saveToLocalStorage from '../Services/saveToLocalStorage';

const buttonHome = ({ name, assertions, score, gravatarEmail }) => (
  <Link
    to="/pages/Inicio"
    datatest-id="btn-go-home"
    onClick={saveToLocalStorage(name, assertions, score, gravatarEmail)}
  >
    Voltar à Página Inicial
  </Link>
);

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  assertions: state.loginReducer.assertions,
  score: state.loginReducer.score,
  gravatarEmail: state.loginReducer.email,
});

buttonHome.propTypes = {
  name: PropTypes.string.isRequired,
  assertions: PropTypes.number,
  score: PropTypes.number,
  gravatarEmail: PropTypes.string.isRequired,
};

buttonHome.defaultProps = {
  assertions: 0,
  score: 0,
};

export default connect(mapStateToProps)(buttonHome);
