import { request } from '@@/exports';

export async function getProducts() {
  return request<any>(`/api/v1/products`, {
    method: 'GET',
  });
}
