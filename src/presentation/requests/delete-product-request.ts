import RequestModel from '~presentation-interface/request-model-interface';

type DeleteProductRequest = RequestModel<{}, { id: string }>;

export default DeleteProductRequest;
