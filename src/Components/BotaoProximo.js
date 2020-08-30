import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeIndex, resetAnswer, resetTime } from '../Actions';

function ButtonNext({ handleClick, indexChange, resetingAnswer, respondido, resetingTime }) {
  return (
    <button
      className={respondido ? 'button' : 'buttonNull'}
      data-testid="btn-next"
      onClick={() => {
        resetingAnswer();
        indexChange();
        handleClick();
        resetingTime();
      }}
    >
      Próxima
    </button>
  );
}

function ButtonFeedBack({ handleClick, resetingAnswer, respondido }) {
  return (
    <Link to="/feedback">
      <button
        className={respondido ? 'button' : 'buttonNull'}
        data-testid="btn-next"
        onClick={() => {
          resetingAnswer();
          handleClick();
        }}
      >
        Próxima
      </button>
    </Link>
  );
}

class BotaoProximo extends Component {
  render() {
    const { handleClick, indexChange, resetingAnswer,
      respondido, indexJogo, resetingTime } = this.props;
    return indexJogo === 4 ? (
      <ButtonFeedBack
        indexJogo={indexJogo}
        handleClick={handleClick}
        resetingAnswer={resetingAnswer}
        respondido={respondido}
      />
    ) : (
      <ButtonNext
        indexJogo={indexJogo}
        handleClick={handleClick}
        indexChange={indexChange}
        resetingAnswer={resetingAnswer}
        respondido={respondido}
        resetingTime={resetingTime}
      />
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
  indexJogo: state.indexJogoReducer.indexJogo,
});

BotaoProximo.propTypes = {
  handleClick: PropTypes.func.isRequired,
  indexChange: PropTypes.func.isRequired,
  resetingAnswer: PropTypes.func.isRequired,
  respondido: PropTypes.bool.isRequired,
  indexJogo: PropTypes.number.isRequired,
  resetingTime: PropTypes.func.isRequired,
};

ButtonFeedBack.propTypes = {
  handleClick: PropTypes.func.isRequired,
  resetingAnswer: PropTypes.func.isRequired,
  respondido: PropTypes.bool.isRequired,
};

ButtonNext.propTypes = {
  handleClick: PropTypes.func.isRequired,
  indexChange: PropTypes.func.isRequired,
  resetingAnswer: PropTypes.func.isRequired,
  respondido: PropTypes.bool.isRequired,
  resetingTime: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BotaoProximo);
