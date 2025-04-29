import { defineConfig } from '@umijs/max';

export default defineConfig({
  ignore: ['**/ignored-directory/**', '**/*.ignored-file-extension'],
  antd: {},
  access: {},
  model: {},
  initialState: {},
  define: {
    // 'process.env.NODE_ENV': process.env.NODE_ENV || 'development',
    'process.env.DOMAIN_API': process.env.DOMAIN_API || 'development',
  },
  request: {},
  dva: {
    immer: { enableES5: true },
  },
  proxy: {
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
      path: '/product/all',
      component: './ProductManagement',
    },
    {
      name: 'Create Product',
      path: '/product/new',
      layout: false,
      component: './CreateProduct',
    },
  ],
  npmClient: 'yarn',
});
