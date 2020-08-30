import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIndex, resetAnswer, resetTime } from '../Actions';

class BotaoProximo extends Component {
  render() {
    const { disabled, handleClick, indexChange,
      resetingAnswer, respondido, resetingTime } = this.props;
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
            resetingTime();
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
  resetingTime: () => dispatch(resetTime()),
});

const mapStateToProps = (state) => ({
  respondido: state.answerReducer.respondido,
});

BotaoProximo.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  indexChange: PropTypes.func.isRequired,
  resetingAnswer: PropTypes.func.isRequired,
  respondido: PropTypes.bool.isRequired,
  resetingTime: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BotaoProximo);
