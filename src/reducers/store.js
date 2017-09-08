import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './rootReducer';

const middleware = ((middlewares) => {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      return compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }
  return applyMiddleware(...middlewares);
})([]);

const store = createStore(rootReducer, window.initialState, middleware);

export default store;
