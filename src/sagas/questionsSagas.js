import { call, put, takeLatest, fork } from 'redux-saga/effects';

import { questionsActionTypes } from './actionTypes';

import { pollingApi } from '../api/PollingApi';


export const questionsRequest = () => ({
  type: questionsActionTypes.FETCH,
  payload: {}
});

function* handleQuestionsRequest({ payload }) {
  try {
    const response = yield call(pollingApi.questions, payload);

    yield put({ type: questionsActionTypes.FETCH_COMPLETE, payload: response });
  } catch (error) {
    yield put({ type: questionsActionTypes.FETCH_FAILED, payload: error });
  }
}

function* watchQuestionsRequest() {
  yield takeLatest(questionsActionTypes.FETCH, handleQuestionsRequest);
}


export function* questionsSagas() {
  yield fork(watchQuestionsRequest);
}
