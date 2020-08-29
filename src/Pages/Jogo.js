import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompQuestion from '../Components/CompQuestion';
import CompCategory from '../Components/CompCategory';
import { fechQuestion } from '../Actions';
import BotaoProximo from '../Components/BotaoProximo';
import '../App.css';
import Header from '../Components/Header';

class Jogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
    };
    this.finishQuestion = this.finishQuestion.bind(this);
  }

  componentDidMount() {
    const { startNemQuestion } = this.props;
    startNemQuestion();
  }

  finishQuestion() {
    this.setState({
      disabled: false,
    });
  }

  render() {
    const { questions, indexJogo, isFetching } = this.props;
    const { disabled } = this.state;
    if (!isFetching) {
      const actualQuestion = questions[indexJogo];
      return (
        <div className="jogo">
          <Header />
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
                  handleClick={this.finishQuestion}
                />
              </div>
              <div>{'Tempo: 30s'}</div>
            </div>
            <BotaoProximo disabled={disabled} />
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
  indexJogo: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

// export default connect(mapStateToProps)(Jogo);
export default connect(mapStateToProps, mapDispathToProps)(Jogo);
