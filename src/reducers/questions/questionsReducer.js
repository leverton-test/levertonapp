import { questionsActionTypes } from '../../sagas/actionTypes';
import { replaceAtIndex } from '../../common/utils';

const initialState = [];

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case questionsActionTypes.FETCH_COMPLETE: {
      return action.payload;
    }
    case questionsActionTypes.VOTE_COMPLETE: {
      const { payload: choice, meta: { questionUrl }} = action;
      const qIndex = state.findIndex(q => q.url === questionUrl);
      if (qIndex !== -1) {
        const question = state[qIndex];
        const choiceIndex = question.choices.findIndex(c => c.url === choice.url);
        return replaceAtIndex(state, qIndex, {
          ...question,
          choices: replaceAtIndex(question.choices, choiceIndex, choice)
        });
      }
      break;
    }
    case questionsActionTypes.CREATE_COMPLETE: {
      return [action.payload, ...state];
    }
    default:
      break;
  }
  return state;
}
