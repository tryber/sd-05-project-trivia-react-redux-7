import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompQuestion from '../Components/CompQuestion';
import CompCategory from '../Components/CompCategory';
import { fechQuestion } from '../Actions';
import BotaoProximo from '../Components/BotaoProximo';
import '../App.css';

class Jogo extends Component {
  componentDidMount() {
    const { startNemQuestion } = this.props;
    startNemQuestion();
  }

  render() {
    const { login, questions, indexJogo, isFetching } = this.props;
    if (!isFetching) {
      const actualQuestion = questions[indexJogo];
      return (
        <div className="jogo">
          <header className="header-jogo">
            <img src={login.gravatarLink} alt="foto" data-testid="header-profile-picture" />
            <h2 data-testid="header-player-name">{`Jogador: ${login.name}`}</h2>
            <h6 data-testid="header-score">{'Nota: 0'}</h6>
          </header>
          <div>
            <div className="pergunta">
              <div className="category" data-testid="question-category">
                <CompCategory />
              </div>
              <div className="question" data-testid="question-text">
                <CompQuestion
                  question={actualQuestion.question}
                  correct_answer={actualQuestion.correct_answer}
                  incorrect_answers={actualQuestion.incorrect_answers}
                />
              </div>
              <div>{'Tempo: 30s'}</div>
            </div>
            <BotaoProximo />
          </div>
        </div>
      );
    }
    return <div>Carregando...</div>;
  }
}

const mapStateToProps = (state) => ({
  ...state.loginReducer,
  questions: state.questionReducer.questions,
  isFetching: state.questionReducer.isFetching,
  error: state.questionReducer.error,
  indexJogo: state.indexJogoReducer.indexJogo,
  login: state.loginReducer,
});

const mapDispathToProps = (dispatch) => ({
  startNemQuestion: () => dispatch(fechQuestion()),
});

Jogo.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  startNemQuestion: PropTypes.func.isRequired,
  login: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  indexJogo: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

// export default connect(mapStateToProps)(Jogo);
export default connect(mapStateToProps, mapDispathToProps)(Jogo);
