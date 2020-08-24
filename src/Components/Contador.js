import React from 'react';
import ReactDOM from 'react-dom';

class Contador extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        currentTime: 30
      }
    }

    tempo() {
      this.setState((prevState, props) => ({
        currentTime: prevState.currentTime - 1;
      }));
    }
  
    componentDidMount(){
      this.timerID = setInterval((prevState, props) => this.tempo(),1000);
    }
  
    render() {
      return (
        <div>
          <h1>Tempo restante {this.state.currentTime}</h1>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Contador />,
  );
  