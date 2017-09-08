import { combineReducers } from 'redux';

import questions from './questions/questionsReducer';

import questionsLoading from './uiState/questionsLoadingReducer';
import voteSaving from './uiState/voteSavingReducer';
import questionCreate from './uiState/questionCreateReducer';

const rootReducer = combineReducers({
  questions: combineReducers({
    questions,
  }),
  ui: combineReducers({
    questionsLoading,
    voteSaving,
    questionCreate
  })
});

export default rootReducer;
