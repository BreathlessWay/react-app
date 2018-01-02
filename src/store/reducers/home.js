import { List, Map } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case 'GET_TOPIC_LIST_SUCCESS':
      let listData = state.setIn(['list', 'result'], List(action.payload.data.data));
      listData = listData.setIn(['list', 'params'], Map(action.meta.previousAction.payload.request.params));
      return listData;
    case 'GET_TOPIC_LIST_FAIL':
      return state;
    case 'GET_TOPIC_LIST_COMPLETE':
      return state;
    default:
      return state;
  }
}
