import { combineReducers } from 'redux-immutable';

import { routerReducer } from 'react-router-redux';
import homeReducers from './home';
import entryReducers from './entry';
import appReducers from './app';

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export default combineReducers({
  entry: entryReducers,
  home: homeReducers,
  app: appReducers,
  router: routerReducer
});
