// A tela de configurações deve possuir um título com o 
// atributo data-testid contendo o valor settings-title
import React, { Component } from 'react';
import '../App.css';

class Config extends Component {
  render() {
    return <h1 datatest-id="settings-title">Configurações</h1>
  };
}

  export default Config;
