import RequestModel from '~presentation-interface/request-model-interface';

type UpdateUserRequest = RequestModel<
  {
    name?: string;
    email?: string;
    password?: string;
  },
  {},
  {},
  { userId: string }
>;

export default UpdateUserRequest;
