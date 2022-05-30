import RequestModel from '~presentation-interface/request-model-interface';

type UpdateCategoryRequest = RequestModel<{ name?: string }, { id: string }>;

export default UpdateCategoryRequest;
