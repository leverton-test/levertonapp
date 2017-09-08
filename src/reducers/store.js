import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = ((middlewares) => {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      return compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }
  return applyMiddleware(...middlewares);
})([sagaMiddleware]);

const store = createStore(rootReducer, window.initialState, middleware);

sagaMiddleware.run(sagas);

export default store;
