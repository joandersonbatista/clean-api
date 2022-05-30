import RequestModel from '~presentation-interface/request-model-interface';

type LoginUserRequest = RequestModel<{ email: string; password: string }>;

export default LoginUserRequest;
