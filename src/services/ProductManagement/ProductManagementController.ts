import { request } from '@umijs/max';

export async function getProducts() {
  return request<any>(`/api/v1/products`, {
    method: 'GET',
  });
}
