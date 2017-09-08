import { questionsActionTypes } from '../../sagas/actionTypes';

const initialState = [];

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case questionsActionTypes.FETCH_COMPLETE: {
      return action.payload;
    }
    default:
      break;
  }
  return state;
}
