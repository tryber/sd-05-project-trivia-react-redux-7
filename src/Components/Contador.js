// timer só está fazendo a contagem regressiva e resetando
// quando o tempo acaba
// https://medium.com/@650egor/
// react-30-day-challenge-day-1-simple-timer-df85d0867553
// https://www.youtube.com/watch?v=jCuDrD5-TG8
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetState } from '../Actions';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
      timerOn: !this.props.respondido,
    };
  }

  // chama o timer na tela quando carrega
  componentDidMount() {
    this.tempo();
  }

  // atualiza o timer e reseta quando acaba
  componentDidUpdate() {
    const { timer } = this.state;
    const { respondido, timeReset, resetingState } = this.props;
    if (timer === 0) {
      clearInterval(this.inicioTempo);
    }
    if (respondido) {
      clearInterval(this.inicioTempo);
    }
    if (timeReset) {
      this.startTime();
      resetingState();
      this.tempo();
    }
  }

  startTime() {
    this.setState({
      timer: 30,
    });
  }

  tempo() {
    this.inicioTempo = setInterval(() => {
      this.setState(({ timer }) => ({
        timer: timer - 1,
      }));
    }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.timer);
  };

  resetTimer = () => {
    if (this.state.respondido === false) {
      this.setState({
        timer: this.state.inicioTempo,
      });
    }
  };

  render() {
    const { timer } = this.state;

    return (
      <div>
        <h1>Tempo restante {timer}</h1>
      </div>
    );
  }
}

Contador.propTypes = {
  respondido: PropTypes.bool.isRequired,
  timeReset: PropTypes.bool.isRequired,
  resetingState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  respondido: state.answerReducer.respondido,
  timeReset: state.contadorReducer.timeReset,
});

const mapDispatchToProps = (dispatch) => ({
  resetingState: () => dispatch(resetState()),
});

Contador.propTypes = {
  respondido: PropTypes.bool.isRequired,
  resetingState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contador);
