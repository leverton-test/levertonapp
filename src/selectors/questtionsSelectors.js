import { createSelector } from 'reselect';

export const questionsSelector = state => state.questions.questions;


export const makeQuestionDetailsSelector = () => createSelector(
  (state, props) => props.questionId,
  questionsSelector,
  (questionId, questtions) => {
    if (questionId === null) {
      return null;
    }
    return questtions.find(q => q.url === questionId);
  }
);
