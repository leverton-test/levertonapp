import React from 'react';
import { Provider } from 'react-redux';

import QuestionsContainer from './components/Questions/QuestionsContainer';

import store from './reducers/store';

import './components/shared/layout.styl';

export default () => (
  <Provider store={store}>
    <QuestionsContainer />
  </Provider>
);
