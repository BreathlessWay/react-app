export function getList ({page, tab, limit}) {
  return {
    type: 'GET_TOPIC_LIST',
    payload: {
      request: {
        url: '/topics',
        params: {
          page,
          tab,
          limit
        }
      }
    }
  };
}
