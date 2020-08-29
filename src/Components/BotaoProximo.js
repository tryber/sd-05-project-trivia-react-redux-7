import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIndex, resetAnswer } from '../Actions';

class BotaoProximo extends Component {
  render() {
    const { disabled, handleClick, changeIndex, resetAnswer } = this.props;
    return (
      <div>
        <button
          className="button"
          data-testid="btn-next"
          disabled={disabled}
          onClick={() => {
            resetAnswer();
            changeIndex();
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
  changeIndex: (indexJogo) => dispath(changeIndex(indexJogo)),
  resetAnswer: () => dispath(resetAnswer()),
});

BotaoProximo.propTypes = {
  changeIndex: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispathToProps)(BotaoProximo);
