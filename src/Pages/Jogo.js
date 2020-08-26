import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompQuestion from '../Components/CompQuestion';
import CompCategory from '../Components/CompCategory';
import { fechQuestion } from '../Actions';
import BotoesResposta from '../Components/BotoesResposta';
import BotaoProximo from '../Components/BotaoProximo';
import '../App.css';

class Jogo extends Component {

  componentDidMount() {
    const { startNemQuestion } = this.props;
    startNemQuestion();
  }

  render() {
    return (
      <div className="jogo">
        <header className="header-jogo">
          <img src="." alt="foto" data-testid="header-profile-picture" />
          <h2 data-testid="header-player-name">{'Jogador: name'}</h2>
          <h6 data-testid="header-score">{'Nota: 0'}</h6>
        </header>
        <div>
          <div className="pergunta">
            <div className="category" data-testid="question-category"><CompCategory /></div>
            <div className="question" data-testid="question-text"><CompQuestion /></div>
            <div>{'Tempo: 30s'}</div>
          </div>
          <div className="alternativas">
            <BotoesResposta />
          </div>
          <BotaoProximo />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questionReducer.questions,
});

const mapDispathToProps = (dispath) => ({
  startNemQuestion: () => dispath(fechQuestion()),
});

Jogo.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  startNemQuestion: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(Jogo);
