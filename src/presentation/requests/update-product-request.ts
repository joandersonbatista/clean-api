import RequestModel from '~presentation-interface/request-model-interface';

type UpdateProductRequest = RequestModel<
  {
    name?: string;
    price?: string;
    brandId?: string;
    categoryId?: string;
  },
  { id: string }
>;

export default UpdateProductRequest;
