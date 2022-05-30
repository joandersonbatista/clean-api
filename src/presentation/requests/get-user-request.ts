import RequestModel from '~presentation-interface/request-model-interface';

type GetUserRequest = RequestModel<{}, {}, {}, { userId: string }>;

export default GetUserRequest;
