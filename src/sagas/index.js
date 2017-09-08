import { fork } from 'redux-saga/effects';
import { questionsSagas } from './questionsSagas';

export default function* sagas() {
  yield fork(questionsSagas);
}
