import { questionsActionTypes } from '../../sagas/actionTypes';

const initialState = {
  isFetching: false,
};

export default function questionsLoadingReducer(state = initialState, action) {
  switch (action.type) {
    case questionsActionTypes.VOTE:
      return { ...initialState, isFetching: true };
    case questionsActionTypes.VOTE_COMPLETE:
      return initialState;
    case questionsActionTypes.VOTE_FAILED: {
      return initialState;
    }
    default:
      break;
  }
  return state;
}
