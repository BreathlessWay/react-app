import { List } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case 'UPDATE_BREADCRUMB':
      if (action.payload.params.length > 0) {
        const breadcrumbLength = action.payload.params.length,
          breadcrumbList = action.payload.params;
        document.title = breadcrumbList[breadcrumbLength - 1]['name'];
        return state.set('breadcrumb', List(breadcrumbList));
      } else {
        return state;
      }
    case 'GET_MESSAGE_COUNT_SUCCESS':
      return state.set('messageCount', action.payload.data.data);
    case 'GET_MESSAGE_COUNT_FAIL':
      return state;
    case 'GET_MESSAGE_COUNT_COMPLETE':
      return state;
    case 'UPDATE_DIALOG':
      return state.updateIn(['dialog', 'type'], () => action.payload.params.type).updateIn(['dialog', 'message'], () => action.payload.params.message);
    default:
      return state;
  }
}
