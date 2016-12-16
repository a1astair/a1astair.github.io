import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import customMiddleware from '../middleware';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      // applyMiddleware(promiseMiddleware(), thunk, customMiddleware, createLogger()),
      applyMiddleware(promiseMiddleware(), thunk, customMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  syncHistoryWithStore(browserHistory, store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    });
  }

  return store;
}
