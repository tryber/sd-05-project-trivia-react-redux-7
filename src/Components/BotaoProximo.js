import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIndex, resetAnswer } from '../Actions';

class BotaoProximo extends Component {
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

BotaoProximo.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  indexChange: PropTypes.func.isRequired,
  resetingAnswer: PropTypes.func.isRequired,
};

export default connect(null, mapDispathToProps)(BotaoProximo);
