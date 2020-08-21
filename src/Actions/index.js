import ApiQuestion from '../Services/API';

export const START_NEW_QUESTION_FAILURE = 'START_NEW_QUESTION_FAILURE';
export const START_NEW_QUESTION_SUCCESS = 'START_NEW_QUESTION_SUCCESS';
export const START_NEW_QUESTION = 'START_NEW_QUESTION';

const startNemQuestion = () => ({
  type: START_NEW_QUESTION,
});

const startNemQuestionFailure = (error) => ({
  type: START_NEW_QUESTION_FAILURE,
  error,
});

const startNemQuestionSuccess = (questions) => ({
  type: START_NEW_QUESTION_SUCCESS,
  questions,
});

export function fechQuestion() {
  return (dispath) => {
    dispath(startNemQuestion());

    return ApiQuestion()
      .then(
        (results) => dispath(startNemQuestionSuccess(results.results)))
      .catch(
        (error) => dispath(startNemQuestionFailure(error.message)));
  };
}
