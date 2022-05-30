import RequestModel from '~presentation-interface/request-model-interface';

type CreateCategoryRequest = RequestModel<{
  name: string;
  price: number;
  brandId: string;
  categoryId: string;
}>;

export default CreateCategoryRequest;
