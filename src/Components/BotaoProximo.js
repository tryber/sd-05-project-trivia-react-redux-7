import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIndex, resetAnswer } from '../Actions';

class BotaoProximo extends Component {
  render() {
    const { disabled, handleClick, indexChange, resetingAnswer, respondido } = this.props;

    return (
      <div>
        <button
          className={respondido ? 'button' : 'buttonNull'}
          data-testid="btn-next"
          disabled={disabled}
          onClick={() => {
            resetingAnswer();
            indexChange();
            handleClick();
          }}
        >
          Próxima
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  indexChange: (indexJogo) => dispatch(changeIndex(indexJogo)),
  resetingAnswer: () => dispatch(resetAnswer()),
});

const mapStateToProps = (state) => ({
  respondido: state.answerReducer.respondido,
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
  respondido: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BotaoProximo);
