import { createSelector } from 'reselect';

export const questionsSelector = state => state.questions.questions;


export const makeQuestionDetailsSelector = () => createSelector(
  (state, props) => props.questionId,
  questionsSelector,
  (questionId, questions) => {
    if (questionId === null) {
      return null;
    }
    const question = questions.find(q => q.url === questionId);
    return {
      ...question,
      total: question.choices.reduce((sum, c) => sum + c.votes, 0)
    };
  }
);
