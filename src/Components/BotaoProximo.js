import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIndex } from '../Actions';

class BotaoProximo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexJogo: 0,
    };
  }

  onclickFunction = () => {
    this.setState({ indexJogo: this.state.indexJogo + 1  });
    this.props.changeIndex(this.state.indexJogo);
  }

 /*  buttonProximo = () => {

  } */

  render() {
    return (
      <div>
        <button 
          data-testid="btn-next"
          /* disabled={this.buttonProximo()} */ 
          onClick={() => this.onclickFunction()}
        >
          Próxima
        </button>
      </div>
    )
  }
}

const mapDispathToProps = (dispath) => ({
  changeIndex: (indexJogo) => dispath(changeIndex(indexJogo)),
});

BotaoProximo.propTypes = {
  indexJogo: PropTypes.instanceOf(String),
  changeIndex: PropTypes.func.isRequired,
};

export default connect(null, mapDispathToProps)(BotaoProximo);