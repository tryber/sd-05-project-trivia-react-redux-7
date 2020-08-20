import React, { Component } from 'react'

export default class jogo extends Component {
  render() {
    return (
      <div className="jogo">
        <header className="header-jogo">
          <img data-testid="header-profile-picture"></img> 
          <h2 data-testid="header-player-name">{`Jogador: name`}</h2>
          <h6 data-testid="header-score">{`Nota: 0`}</h6>
        </header>
        <body>
          <div className="pergunta">
            <div className="category" data-testid="question-category">{`category`}</div>
            <div className="question" data-testid="question-text">{`question`}</div>
            <div>{`Tempo: 30s`}</div>
          </div>
          <div className ="alternativas">
          </div>
          <div>
            <button>test</button>
          </div>
        </body>
      </div>
    )
  }
}
