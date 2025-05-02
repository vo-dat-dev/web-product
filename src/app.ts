// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import { RunTimeLayoutConfig } from '@@/plugin-layout/types';
import { history } from 'umi';
import { authentication } from './services/authentication/AuthenticationController';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    title: 'Ant Design',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

export function render(oldRender: () => void) {
  const username = 'string';
  const password = 'string';
  authentication({ username, password })
    .then((response) => {
      console.log('Authentication successful', response);
      oldRender();
    })
    .catch((error) => {
      console.error('Authentication failed', error);
      history.push('/login');
      oldRender();
    });
}
