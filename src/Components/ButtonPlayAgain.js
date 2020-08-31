import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetPlacar, resetIndex, unblockAnswer, resetAnswer, resetState } from '../Actions';
import '../App.css';

const PlayAgain = ({
  resetingPlacar,
  resetingIndex,
  unblockingAnswer,
  resetingAnswer,
  resetingState,
}) => (
  <Link to="/" data-testid="btn-play-again">
    <button
      className="button buttonVerde"
      onClick={() => {
        resetingPlacar();
        resetingIndex();
        unblockingAnswer();
        resetingAnswer();
        resetingState();
      }}
    >
      Jogar novamente
    </button>
  </Link>
);

const mapDispatchToProps = (dispatch) => ({
  resetingPlacar: () => dispatch(resetPlacar()),
  resetingIndex: () => dispatch(resetIndex()),
  unblockingAnswer: () => dispatch(unblockAnswer()),
  resetingAnswer: () => dispatch(resetAnswer()),
  resetingState: () => dispatch(resetState()),
});

PlayAgain.propTypes = {
  resetingPlacar: PropTypes.func.isRequired,
  resetingIndex: PropTypes.func.isRequired,
  unblockingAnswer: PropTypes.func.isRequired,
  resetingAnswer: PropTypes.func.isRequired,
  resetingState: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PlayAgain);
