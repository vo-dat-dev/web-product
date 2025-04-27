import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  dva: {
    immer: { enableES5: true },
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
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'Product Management',
      path: '/product',
      component: './ProductManagement',
    },
  ],
  npmClient: 'yarn',
});
