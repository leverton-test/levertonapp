import { combineReducers } from 'redux';

import questions from './questions/questionsReducer';
import questionsLoading from './uiState/questionsLoadingReducer';

const rootReducer = combineReducers({
  questions: combineReducers({
    questions,
  }),
  ui: combineReducers({
    questionsLoading,
  })
});

export default rootReducer;
