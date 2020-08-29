// timer só está fazendo a contagem regressiva e resetando
// quando o tempo acaba
// https://medium.com/@650egor/
// react-30-day-challenge-day-1-simple-timer-df85d0867553
import React from 'react';

class Contador extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        timer: 30
      }
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

    // vai diminuindo de 1 em 1 s
    tempo() {
      this.inicioTempo = setInterval(() => {
        this.setState(({ timer }) => ({
        timer: timer - 1,
        }))
      }, 1000);
    }

    render() {
      const { timer } = this.state;
      return (
        <div>
          <h1>Tempo restante {timer}</h1>
        </div>
      );
    }
  }

 export default Contador;