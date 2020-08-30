import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeIndex, resetAnswer, resetTime, blockAnswer } from '../Actions';
import { saveStateUserToLocal } from '../Services/saveToLocalStorage';

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

function ButtonFeedBack({
  handleClick,
  resetingAnswer,
  respondido,
  userState
}) {
  console.log(userState);
  return (
    <Link to="/feedback">
      <button
        className={respondido ? 'button' : 'buttonNull'}
        data-testid="btn-next"
        onClick={() => {
          resetingAnswer();
          handleClick();
          saveStateUserToLocal(userState);
        }}
      >
        Próxima
      </button>
    </Link>
  );
}

class BotaoProximo extends Component {
  render() {
    const {
      handleClick,
      indexChange,
      resetingAnswer,
      respondido,
      indexJogo,
      resetingTime,
      blockAnswer,
      name, score, picture
    } = this.props;
    const userState = { name, score, picture };
    return indexJogo === 4 ? (
      <ButtonFeedBack
        indexJogo={indexJogo}
        handleClick={handleClick}
        resetingAnswer={resetingAnswer}
        respondido={respondido || blockAnswer}
        userState={userState}
      />
    ) : (
      <ButtonNext
        indexJogo={indexJogo}
        handleClick={handleClick}
        indexChange={indexChange}
        resetingAnswer={resetingAnswer}
        respondido={respondido || blockAnswer}
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
  blockAnswer: state.answerReducer.blockAnswer,
  name:  state.loginReducer.name,
  score: state.loginReducer.score,
  picture: state.loginReducer.gravatarLink,
});

BotaoProximo.propTypes = {
  handleClick: PropTypes.func.isRequired,
  indexChange: PropTypes.func.isRequired,
  resetingAnswer: PropTypes.func.isRequired,
  respondido: PropTypes.bool.isRequired,
  indexJogo: PropTypes.number.isRequired,
  resetingTime: PropTypes.func.isRequired,
  blockAnswer: PropTypes.bool.isRequired,
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
