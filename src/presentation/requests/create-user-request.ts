import RequestModel from '~presentation-interface/request-model-interface';

type CreateUserRequest = RequestModel<{
  name: string;
  email: string;
  password: string;
}>;

export default CreateUserRequest;
