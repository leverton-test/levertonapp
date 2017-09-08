import { call, put } from 'redux-saga/effects';

const apiCallSaga = (actionType, apiCall) => {
  function* request({ payload }) {
    try {
      const response = yield call(apiCall, payload);

      yield put({ type: `${actionType}_COMPLETE`, payload: response });
    } catch (error) {
      yield put({ type: `${actionType}_FAILED`, payload: error });
    }
  }
  return request;
};


export default apiCallSaga;
