import RequestModel from '~presentation-interface/request-model-interface';

type GetBrandRequest = RequestModel<{}, { id?: string }>;

export default GetBrandRequest;
