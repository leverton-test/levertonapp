import React from 'react';
import { Provider } from 'react-redux';

import Questions from './components/Questions/Questions';

import store from './reducers/store';

import './components/shared/layout.styl';

export default () => (
  <Provider store={store}>
    <Questions />
  </Provider>
);
