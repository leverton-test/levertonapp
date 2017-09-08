import { createActionTypes } from '../common/utils';

export const questionsActionTypes = createActionTypes('questions', {
  FETCH: null,
  FETCH_COMPLETE: null,
  FETCH_FAILED: null,

  VOTE: null,
  VOTE_COMPLETE: null,
  VOTE_FAILED: null,

  CREATE: null,
  CREATE_COMPLETE: null,
  CREATE_FAILED: null,
});
