import { questionsActionTypes } from '../../sagas/actionTypes';

const initialState = {
  isFetching: false,
  isCreated: false
};

export default function questionCreateReducer(state = initialState, action) {
  switch (action.type) {
    case questionsActionTypes.CREATE:
      return { ...initialState, isFetching: true };
    case questionsActionTypes.CREATE_COMPLETE:
      return { ...initialState, isCreated: true };
    case questionsActionTypes.CREATE_FAILED: {
      return initialState;
    }
    default:
      break;
  }
  return state;
}
