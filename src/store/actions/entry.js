export function entryUser (params) {
  return {
    type: 'ENTRY_USER',
    payload: {
      request: {
        url: '/accesstoken',
        method: 'post',
        data: {
          accesstoken: params
        }
      }
    }
  };
}

export function entryUserCookie (params) {
  return {
    type: 'ENTRY_USER_COOKIE',
    payload: {
      params
    }
  };
}

export function setBreadcrumb (list) {
  return {
    type: 'UPDATE_BREADCRUMB',
    payload: {
      params: list
    }
  };
}

export function logout (params) {
  return {
    type: 'LOGOUT_USER',
    payload: {}
  };
}
