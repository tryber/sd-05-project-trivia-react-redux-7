import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIndex } from '../Actions';

class BotaoProximo extends Component {
  render() {
    const { disabled, handleClick, changeIndex } = this.props;
    return (
      <div>
        <button
          className="button"
          data-testid="btn-next"
          disabled={disabled}
          onClick={() => {
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
});

BotaoProximo.propTypes = {
  changeIndex: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispathToProps)(BotaoProximo);
