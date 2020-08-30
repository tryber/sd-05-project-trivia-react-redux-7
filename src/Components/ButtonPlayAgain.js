import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import {resetPlacar, resetIndex, unblockAnswer, resetAnswer, resetState} from '../Actions';

const PlayAgain = ({resetingPlacar, resetingIndex,
  unblockingAnswer, resetingAnswer, resetingState}) => (
  <Link to="/" data-testid="btn-play-again">
    <button className="button buttonVerde" onClick={() => {
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
})

export default connect(null, mapDispatchToProps)(PlayAgain);
