import { createStore, compose, applyMiddleware } from 'redux';

import createHistory from 'history/createBrowserHistory';

import { routerMiddleware } from 'react-router-redux';
import axios from 'axios';
import multiClientMiddleware from 'redux-axios-middleware';
import reducers from './reducers'; // Or wherever you keep your reducers
import { fromJS } from 'immutable';
import initialHome from './state/home';
import initialEntry from './state/entry';
import initialApp from './state/app';

const initialState = fromJS({
  home: initialHome,
  entry: initialEntry,
  app: initialApp,
  router: {}
});
// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating

const config = {
  returnRejectedPromiseOnError: true,
  onComplete ({action, next, getState, dispatch}, actionOptions) {
    const previousAction = action.meta.previousAction;
    const nextAction = {
      type: previousAction.type + '_COMPLETE',
      meta: {
        previousAction: previousAction
      }
    };
    next(nextAction);
    return nextAction;
  }
};

export let store = '';

if (process.env['NODE_ENV'] === 'development') {
  store = createStore(reducers, initialState, compose(
    applyMiddleware(middleware, multiClientMiddleware(axios, config)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
} else {
  store = createStore(reducers, initialState, compose(
    applyMiddleware(middleware, multiClientMiddleware(axios, config))
  ));
}

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default;
    store.replaceReducer(nextReducer);
  });
}
