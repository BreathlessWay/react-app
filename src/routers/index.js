import asyncComponent from '../components/asyncComponent';

const Header = asyncComponent(() => import(/* webpackChunkName: "header" */ '../pages/Header'));
const Home = asyncComponent(() => import(/* webpackChunkName: "home" */ '../pages/Home'));
const Detail = asyncComponent(() => import(/* webpackChunkName: "detail" */ '../pages/Detail'));
const NotFound = asyncComponent(() => import(/* webpackChunkName: "detail" */ '../pages/NotFound'));

export default [
  {
    path: '/',
    component: Header,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/detail',
        component: Detail,
        routes: [
          {
            path: '/detail',
            exact: true,
            component: Detail
          },
          {
            path: '/detail/name',
            component: Detail
          },
          {
            path: '*',
            component: NotFound
          }
        ]
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];
