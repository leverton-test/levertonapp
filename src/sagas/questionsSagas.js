import { takeLatest, fork } from 'redux-saga/effects';
import apiCallSaga from './apiCallSaga';

import { questionsActionTypes } from './actionTypes';

import { pollingApi } from '../api/PollingApi';

import { extractId } from '../common/utils';

export const questionsRequest = () => ({
  type: questionsActionTypes.FETCH,
  payload: {}
});

const handleQuestionsRequest = apiCallSaga(questionsActionTypes.FETCH, pollingApi.questions);

function* watchQuestionsRequest() {
  yield takeLatest(questionsActionTypes.FETCH, handleQuestionsRequest);
}

export const voteRequest = (question, choice) => ({
  type: questionsActionTypes.VOTE,
  payload: {
    questionId: extractId(question.url),
    choiceId: extractId(choice.url)
  },
  meta: { questionUrl: question.url }
});

const handleVoteRequest = apiCallSaga(questionsActionTypes.VOTE, pollingApi.vote);

function* watchVoteRequest() {
  yield takeLatest(questionsActionTypes.VOTE, handleVoteRequest);
}


export const createRequest = (question, choices) => ({
  type: questionsActionTypes.CREATE,
  payload: { question, choices }
});

const handleCreateRequest = apiCallSaga(questionsActionTypes.CREATE, pollingApi.create);

function* watchCreateRequest() {
  yield takeLatest(questionsActionTypes.CREATE, handleCreateRequest);
}

export function* questionsSagas() {
  yield fork(watchQuestionsRequest);
  yield fork(watchVoteRequest);
  yield fork(watchCreateRequest);
}
