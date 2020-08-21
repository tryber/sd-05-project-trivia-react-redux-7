import React, { Component } from 'react';

export default class Jogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
    };
  }

  render() {
    return (
      <div className="jogo">
        <header className="header-jogo">
          <img src="." alt="foto" data-testid="header-profile-picture" />
          <h2 data-testid="header-player-name">{'Jogador: name'}</h2>
          <h6 data-testid="header-score">{'Nota: 0'}</h6>
        </header>
        <body>
          <div className="pergunta">
            <div className="category" data-testid="question-category">{'category'}</div>
            <div className="question" data-testid="question-text">{'question'}</div>
            <div>{'Tempo: 30s'}</div>
          </div>
          <div className="alternativas">
            <button>test</button>
          </div>
        </body>
      </div>
    );
  }
}
