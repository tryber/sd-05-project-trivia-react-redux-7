import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {resetPlacar, resetIndex, unblockAnswer, resetAnswer, resetState} from '../Actions';

const buttonHome = ({resetingPlacar, resetingIndex,
  unblockingAnswer, resetingAnswer, resetingState}) => (
  <Link
    to="/"
    data-testid="btn-go-home"
  >
    <button type="button" onClick={() => {
      resetingPlacar();
      resetingIndex();
      unblockingAnswer();
      resetingAnswer();
      resetingState();
    }}
    >
      Voltar à Página Inicial
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

export default connect(null, mapDispatchToProps)(buttonHome);
