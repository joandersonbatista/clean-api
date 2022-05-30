import RequestModel from '~presentation-interface/request-model-interface';

type DeleteUserRequest = RequestModel<{}, {}, {}, { userId: string }>;

export default DeleteUserRequest;
