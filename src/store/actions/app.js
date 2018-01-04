export function setBreadcrumb (list) {
  return {
    type: 'UPDATE_BREADCRUMB',
    payload: {
      params: list
    }
  };
}

export function getMessageCount (accesstoken) {
  return {
    type: 'GET_MESSAGE_COUNT',
    payload: {
      request: {
        url: '/message/count',
        method: 'get',
        params: {
          accesstoken
        }
      }
    }
  };
}

export function handleDialog ({type, message}) {
  return {
    type: 'UPDATE_DIALOG',
    payload: {
      params: {
        type,
        message
      }
    }
  };
}
