import { RequirementItem } from '@/pages/CreateProduct/components/FillOutSuggestion';

export interface CreateProductState {
  products: [];
  requirements: RequirementItem[];
  product_details: any;
}

export interface CreateProductModelType {
  namespace: string;
  state: any;
  effects: any;
  reducers: any;
}

const CreateProductModel: CreateProductModelType = {
  namespace: 'createProduct',
  state: {
    products: [],
    requirements: [
      { name: 'Thêm ít nhất 3 hình ảnh', completed: false },
      { name: 'Thêm video sản phẩm', completed: false },
      { name: 'Tên sản phẩm có ít nhất 25~100 kí tự', completed: false },
      {
        name: 'Thêm ít nhất 100 kí tự hoặc 1 hình ảnh trong mô tả sản phẩm',
        completed: false,
      },
      { name: 'Thêm thương hiệu', completed: false },
    ],
    product_details: {
      product_information: {},
      purchase_information: {},
      shipping_information: {},
      other_information: {},
    },
  },
  effects: {},
  reducers: {
    disActiveCheckWithRequirement: (
      state: any,
      { payload }: { payload: RequirementItem },
    ) => {
      return {
        requirements: state.requirements.map((item: RequirementItem) =>
          item.name === payload.name
            ? {
                ...item,
                completed: false,
              }
            : { ...item },
        ),
      };
    },
    activeCheckWithRequirement: (
      state: any,
      { payload }: { payload: RequirementItem },
    ) => {
      return {
        requirements: state.requirements.map((item: RequirementItem) =>
          item.name === payload.name
            ? {
                ...item,
                completed: true,
              }
            : { ...item },
        ),
      };
    },
  },
};

export default CreateProductModel;
