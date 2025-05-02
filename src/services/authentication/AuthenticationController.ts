import { extend } from 'umi-request';

export async function authentication({ username, password }: any) {
  const request = extend({
    prefix: '/api/v1',
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return request.post(`/auth/login`, {
    body: JSON.stringify({ username, password }),
  });
}
