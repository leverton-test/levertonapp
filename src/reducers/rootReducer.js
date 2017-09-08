import { combineReducers } from 'redux';

import questions from './questions/questionsReducer';

const rootReducer = combineReducers({
  questions: combineReducers({
    questions,
  })
});

export default rootReducer;
