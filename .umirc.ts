import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  define: {},
  request: {},
  dva: {
    immer: { enableES5: true },
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'product',
          entry: '//localhost:8002',
        },
        {
          name: 'authentication',
          entry: '//localhost:8083',
        },
      ],
    },
  },
  proxy: {
    '/api/v1/auth/': {
      target: 'http://localhost:8083',
      changeOrigin: true,
      pathRewrite: { '^/': '/' },
    },
    '/api/v1': {
      target: 'http://localhost:8082',
      changeOrigin: true,
      pathRewrite: { '^/': '/' },
    },
  },
  layout: {
    title: '@umijs/max',
  },
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      layout: false,
      component: './Login',
    },
    // {
    //   name: '首页',
    //   path: '/home',
    //   component: './Home',
    // },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //   name: ' CRUD 示例',
    //   path: '/table',
    //   component: './Table',
    // },
    {
      name: 'Product Management',
      path: '/product/all',
      component: './ProductManagement',
    },
    {
      name: 'Create Product',
      path: '/product/new',
      layout: false,
      component: './CreateProduct',
    },
    {
      path: '/*',
      component: './404',
      layout: false,
    },
  ],
  npmClient: 'yarn',
});
