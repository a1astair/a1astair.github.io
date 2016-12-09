import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers'
import customMiddleware from '../middleware'
import { checkIsEditor, loadRoles } from '../actions';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(promiseMiddleware(), thunk, customMiddleware)
  );

  syncHistoryWithStore(browserHistory, store);

  return store;
}
