import { createActionTypes } from '../common/utils';

export const questionsActionTypes = createActionTypes('questions', {
  FETCH: null,
  FETCH_COMPLETE: null,
  FETCH_FAILED: null,
});
