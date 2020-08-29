// timer só está fazendo a contagem regressiva e resetando
// quando o tempo acaba
// https://medium.com/@650egor/
// react-30-day-challenge-day-1-simple-timer-df85d0867553
// https://www.youtube.com/watch?v=jCuDrD5-TG8
import React from "react";
import PropTypes from 'prop-types';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
    };
  }

  // chama o timer na tela quando carrega
  componentDidMount() {
    this.tempo();
  }

  // atualiza o timer e reseta quando acaba
  componentDidUpdate() {
    const { timer } = this.state;
    if (timer === 0) {
      clearInterval(this.inicioTempo);
    }
  }

  /* componentWillUnmount() {
    if (!respondido) {
    }
  } */

  // vai diminuindo de 1 em 1 s
  tempo() {
    const {respondido } = this.props;
    if (!respondido) {
    this.inicioTempo = setInterval(() => {
      this.setState(({ timer }) => ({
        timer: timer - 1,
      }));
    }, 1000);
    }
    return this.setState({ timer: 30 });
  }

  render() {
    const { timer } = this.state;
    const { respondido } = this.props;
    /* if (!respondido) {
      this.setState({ timer: 30 });
    } */
    return (
      <div>
        <h1>Tempo restante {timer}</h1>
      </div>
    );
  }
}

Contador.propTypes = {
  respondido: PropTypes.bool.isRequired,
}

Contador.defaultProps = {
  respondido: false,
}

export default Contador;
