import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIndex, resetAnswer, setScore, setAssertions } from '../Actions';

class BotaoProximo extends Component {
  saveToLocalStorage = () => {
    const { name, assertions, score, gravatarEmail } = this.props;
    const toStorage = {player: { name, assertions, score, gravatarEmail }};
    localStorage.setItem('state', JSON.stringify(toStorage));
  };

  render() {
    const { disabled, handleClick, indexChange, resetingAnswer } = this.props;

    return (
      <div>
        <button
          className="button"
          data-testid="btn-next"
          disabled={disabled}
          onClick={() => {
            resetingAnswer();
            indexChange();
            handleClick();
            this.saveToLocalStorage();
          }}
        >
          Próxima
        </button>
      </div>
    );
  }
}

const mapDispathToProps = (dispath) => ({
  indexChange: (indexJogo) => dispath(changeIndex(indexJogo)),
  resetingAnswer: () => dispath(resetAnswer()),
});

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  assertions: state.loginReducer.assertions,
  score: state.loginReducer.score,
  gravatarEmail: state.loginReducer.email,
});

BotaoProximo.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  indexChange: PropTypes.func.isRequired,
  resetingAnswer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(BotaoProximo);
