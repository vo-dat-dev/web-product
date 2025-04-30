import { ProductModelType } from '@/models/ProductManagement';

const CreateProductModel: ProductModelType = {
  namespace: 'createProduct',
  state: {
    products: [],
  },
  effects: {
    // *createProduct({ type, payload }, { call, put }) {}
  },
  reducers: {
    // saveProducts(state = { products: [] }, { payload }) {
    //   return {
    //     ...state,
    //     products: payload,
    //   };
    // },
  },
};

export default CreateProductModel;
