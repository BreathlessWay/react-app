import { Map } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case 'ENTRY_USER_SUCCESS':
      const userInfo = state.get('userInfo').merge(Map({
        accesstoken: action.meta.previousAction.payload.request.data.accesstoken,
        ...action.payload.data
      }));
      return state.set('userInfo', userInfo);
    case 'ENTRY_USER_FAIL':
      return state;
    case 'ENTRY_USER_COMPLETE':
      return state;
    case 'ENTRY_USER_COOKIE':
      const userInfoCookie = state.get('userInfo').merge(Map({
        ...action.payload.params
      }));
      return state.set('userInfo', userInfoCookie);
    case 'LOGOUT_USER':
      const logoutInfo = Map({
        accesstoken: '',
        loginname: '',
        id: '',
        avatar_url: ''
      });
      return state.set('userInfo', logoutInfo);
    default:
      return state;
  }
}
