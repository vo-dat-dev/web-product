import { getProducts } from '@/services/ProductManagement/ProductManagementController';

const ProductManagement = {
  namespace: 'productManagement',
  state: {
    products: [],
  },
  effects: {
    *getProducts(_: any, { put, call }: any) {
      // @ts-ignore
      const response: any = yield call(getProducts);
      yield put({
        type: 'saveProducts',
        payload: response,
      });
    },
  },
  reducers: {
    saveProducts(state: any, { payload }: any) {
      return {
        ...state.products,
        products: payload,
      };
    },
  },
};

export default ProductManagement;
