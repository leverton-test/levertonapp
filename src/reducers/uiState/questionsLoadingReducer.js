import { questionsActionTypes } from '../../sagas/actionTypes';

const initialState = {
  isFetching: false,
  error: null
};

export default function questionsLoadingReducer(state = initialState, action) {
  switch (action.type) {
    case questionsActionTypes.FETCH:
      return { ...initialState, isFetching: true };
    case questionsActionTypes.FETCH_COMPLETE:
      return initialState;
    case questionsActionTypes.FETCH_FAILED: {
      const error = action.payload;
      return {
        ...initialState,
        error: error.name === 'ApiError' ? error.json : error
      };
    }
    default:
      break;
  }
  return state;
}
