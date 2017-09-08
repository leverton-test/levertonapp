import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const appElement = document.getElementById('app-root');

const renderApp = AppComponent => render(
  <AppContainer>
    <AppComponent />
  </AppContainer>,
  appElement
);

renderApp(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => renderApp(require('./App').default)); // eslint-disable-line
}
