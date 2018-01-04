import * as homeActions from './home';
import * as entryActions from './entry';
import * as appActions from './app';

export default {
  ...homeActions,
  ...entryActions,
  ...appActions
};
