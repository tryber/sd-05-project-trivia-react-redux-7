import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeIndex, resetAnswer } from '../Actions';

function ButtonNext(props) {
  const { disabled, handleClick, indexChange, resetingAnswer, respondido } = props;
  return (
    <div>
      <button
        className={respondido ? 'button' : 'buttonNull'}
        data-testid="btn-next"
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

function ButtonFeedBack({ resetingAnswer, respondido }) {
  return respondido ? (
    <Link to="/feedback" className={respondido ? 'button' : 'buttonNull'}>
      <button
        className={respondido ? 'button' : 'buttonNull'}
        onClick={() => {
          resetingAnswer();
        }}
      >
        Resultado
      </button>
    </Link>
  ) : null;
}

class BotaoProximo extends Component {
  render() {
    const {
      disabled,
      handleClick,
      indexChange,
      resetingAnswer,
      respondido,
      indexJogo,
    } = this.props;
    return indexJogo === 4 ? (
      <ButtonFeedBack respondido={respondido} disabled={disabled} resetingAnswer={resetingAnswer} />
    ) : (
      <ButtonNext
        disabled={disabled}
        handleClick={handleClick}
        indexChange={indexChange}
        resetingAnswer={resetingAnswer}
        respondido={respondido}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  indexChange: (indexJogo) => dispatch(changeIndex(indexJogo)),
  resetingAnswer: () => dispatch(resetAnswer()),
});

const mapStateToProps = (state) => ({
  respondido: state.answerReducer.respondido,
  indexJogo: state.indexJogoReducer.indexJogo,
});

BotaoProximo.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  indexChange: PropTypes.func.isRequired,
  resetingAnswer: PropTypes.func.isRequired,
  respondido: PropTypes.bool.isRequired,
  indexJogo: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BotaoProximo);
