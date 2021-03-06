import { questionsActionTypes } from '../../sagas/actionTypes';

const initialState = {
  isFetching: false,
};

export default function questionsLoadingReducer(state = initialState, action) {
  switch (action.type) {
    case questionsActionTypes.FETCH:
      return { ...initialState, isFetching: true };
    case questionsActionTypes.FETCH_COMPLETE:
      return initialState;
    case questionsActionTypes.FETCH_FAILED: {
      return initialState;
    }
    default:
      break;
  }
  return state;
}
