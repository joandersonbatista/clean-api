import CreateUserApplication from '~application/create-user.application';
import DeleteUserApplication from '~application/delete-user.application';
import GetUserApplication from '~application/get-user.application';
import LoginUserApplication from '~application/login-user.application';
import UpdateUserApplication from '~application/update-user.application';

import GetUserOutputDTO from '~dto/get-user-output-dto';
import LoginOutputDTO from '~dto/login-output-dto';

import CreatedResponse from '~response/created-response';
import DeletedResponse from '~response/deleted-response';
import SucessResponse from '~response/sucess-response';
import UpdatedResponse from '~response/updated-response';

import CreateUserRequest from '~request/create-user-request';
import DeleteUserRequest from '~request/delete-user-request';
import LoginUserRequest from '~request/login-user-request';
import UpdateUserRequest from '~request/update-user-request';

import MethodController from '~presentation-interface/method-controller-interface';

export default class UserController {
  constructor(
    private readonly createUserApplication: CreateUserApplication,
    private readonly updateUserApplication: UpdateUserApplication,
    private readonly deleteUserApplication: DeleteUserApplication,
    private readonly getUserApplication: GetUserApplication,
    private readonly loginUserApplication: LoginUserApplication,

    private readonly createdResponse: CreatedResponse,
    private readonly updatedResponse: UpdatedResponse,
    private readonly deletedResponse: DeletedResponse,
    private readonly sucessResponse: SucessResponse,
  ) {}

  create: MethodController = async (req: CreateUserRequest) => {
    const inputDTO = { ...req.body };

    await this.createUserApplication.execute(inputDTO);

    return this.createdResponse.response();
  };

  update: MethodController = async (req: UpdateUserRequest) => {
    const inputDTO = { ...req.body, id: req.headers.userId };

    await this.updateUserApplication.execute(inputDTO);

    return this.updatedResponse.response();
  };

  delete: MethodController = async (req: DeleteUserRequest) => {
    const inputDTO = { id: req.headers.userId };

    await this.deleteUserApplication.execute(inputDTO);

    return this.deletedResponse.response();
  };

  get: MethodController<GetUserOutputDTO> = async (req: DeleteUserRequest) => {
    const inputDTO = { id: req.headers.userId };

    const outPutDTO = await this.getUserApplication.execute(inputDTO);

    return this.sucessResponse.response(outPutDTO);
  };

  login: MethodController<LoginOutputDTO> = async (req: LoginUserRequest) => {
    const inputDTO = { ...req.body };

    const outPutDTO = await this.loginUserApplication.execute(inputDTO);

    return this.sucessResponse.response(outPutDTO);
  };
}
