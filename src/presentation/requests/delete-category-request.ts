import RequestModel from '~presentation-interface/request-model-interface';

type DeleteCategoryRequest = RequestModel<{}, { id: string }>;

export default DeleteCategoryRequest;
