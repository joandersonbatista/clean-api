import RequestModel from '~presentation-interface/request-model-interface';

type GetProductRequest = RequestModel<{}, { id?: string }>;

export default GetProductRequest;
