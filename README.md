# react相关

1. 基于()=>import的react-router4的代码分割，参考插件[react-loadable](https://github.com/thejameskyle/react-loadable)
2. create-react-app的配置更改，npm run eject暴漏webpack配置后自定义修改
3. production环境publicpath设置服务器地址
4. 基于[react-router-redux](https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux)的路由信息同步
5. immutable的数据使用更新
6. [react-hot-loader](https://github.com/gaearon/react-hot-loader)热更新
7. redux-axios-middleware在payload中没有request时会作为同步action
8. 图片资源需要通过require方式引入使用
9. 通过为[redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware#middleware-options)的config设置，可以catch异常，并添加_complete状态


## problem

1. react-addons-css-transition-group配合switch的路由过场动画
2. react-router的全局404页面
3. 登录后查询文章收藏状态，目前通过window.history.go()刷新页面解决，考虑到文章放在redux里面太大了


jenkins  测试
