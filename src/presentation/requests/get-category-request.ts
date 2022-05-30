import RequestModel from '~presentation-interface/request-model-interface';

type GetCategoryRequest = RequestModel<{}, { id?: string }>;

export default GetCategoryRequest;
