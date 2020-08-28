import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIndex } from '../Actions';

class BotaoProximo extends Component {

  render() {
    return (
      <div>
        <button
          className="button buttonVerde"
          data-testid="btn-next"
          /* disabled={this.buttonProximo()} */
          onClick={() => {
            this.props.changeIndex();
            
            }
          }
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
};

export default connect(null, mapDispathToProps)(BotaoProximo);
