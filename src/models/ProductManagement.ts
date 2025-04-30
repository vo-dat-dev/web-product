import { getProducts } from '@/services/ProductManagement/ProductManagementController';
import { AnyAction } from 'redux';
import { Effect } from 'umi';

export interface ProductState {
  products: any[];
}

export interface ProductModelType {
  namespace: 'productManagement';
  state: ProductState;
  effects: {
    getProducts: Effect;
  };
  reducers: {
    saveProducts: (state: ProductState, action: AnyAction) => ProductState;
  };
}

const ProductManagementModel: ProductModelType = {
  namespace: 'productManagement',
  state: {
    products: [],
  },
  effects: {
    *getProducts({ payload }, { call, put }) {
      const response = yield call(getProducts, payload);
      yield put({
        type: 'saveProducts',
        payload: response,
      });
    },
  },
  reducers: {
    saveProducts(state = { products: [] }, { payload }) {
      return {
        ...state,
        products: payload,
      };
    },
  },
};

export default ProductManagementModel;
