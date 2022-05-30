import RequestModel from '~presentation-interface/request-model-interface';

type UpdateBrandRequest = RequestModel<{ name?: string }, { id: string }>;

export default UpdateBrandRequest;
