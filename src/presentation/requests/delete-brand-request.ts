import RequestModel from '~presentation-interface/request-model-interface';

type DeleteBrandRequest = RequestModel<{}, { id: string }>;

export default DeleteBrandRequest;
