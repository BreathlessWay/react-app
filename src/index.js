import React from 'react';
import { render } from 'react-dom';
import '@static/style/index.less';
import App from '@pages/App';
import { store } from '@store';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import '@libs/axios.default';
import '@libs/utils';

require('promise.prototype.finally').shim(); //给promise添加finally方法

if (process.env.NODE_ENV === 'development') {
  const renderApp = (Component) => {
    render(
      <AppContainer>
        <Provider store={ store }>
          <Component/>
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  };

  renderApp(App);

// 模块热替换的 API
  if (module.hot) {
    module.hot.accept('@pages/App', () => {
      const App = require('@pages/App').default;
      renderApp(App);
    });
  }
} else {
  render(
    <Provider store={ store }>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
}
