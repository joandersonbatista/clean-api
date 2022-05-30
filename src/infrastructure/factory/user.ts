import CreateUserApplication from '~application/create-user.application';
import DeleteUserApplication from '~application/delete-user.application';
import GetUserApplication from '~application/get-user.application';
import LoginUserApplication from '~application/login-user.application';
import UpdateUserApplication from '~application/update-user.application';

import UserController from '~controller/user-controller';

import CreatedResponse from '~response/created-response';
import DeletedResponse from '~response/deleted-response';
import SucessResponse from '~response/sucess-response';
import UpdatedResponse from '~response/updated-response';

import Bcryptjs from '../bcryptjs';
import JsonWebToken from '../json-web-token';
import UserRepositorieMongoDB from '../mongoDB/repositories/user-repositorie-mongodb';
import UuidV4 from '../uuid';

export default () => {
  const userRepository = new UserRepositorieMongoDB();
  const idGenerator = new UuidV4();
  const passwordHash = new Bcryptjs();
  const tokenJwt = new JsonWebToken();
  // aplications
  const createUserApplication = new CreateUserApplication(
    userRepository,
    idGenerator,
    passwordHash,
  );
  const updateUserApplication = new UpdateUserApplication(
    userRepository,
    passwordHash,
  );
  const deleteUserApplication = new DeleteUserApplication(userRepository);
  const getUserApplication = new GetUserApplication(userRepository);
  const loginUserApplication = new LoginUserApplication(
    userRepository,
    passwordHash,
    tokenJwt,
  );
  // responses
  const createdResponse = new CreatedResponse();
  const updatedResponse = new UpdatedResponse();
  const deletedResponse = new DeletedResponse();
  const sucessResponse = new SucessResponse();
  //controller
  return new UserController(
    createUserApplication,
    updateUserApplication,
    deleteUserApplication,
    getUserApplication,
    loginUserApplication,
    createdResponse,
    updatedResponse,
    deletedResponse,
    sucessResponse,
  );
};
