import RequestModel from '~presentation-interface/request-model-interface';

type CreateCategoryRequest = RequestModel<{ name: string }>;

export default CreateCategoryRequest;
