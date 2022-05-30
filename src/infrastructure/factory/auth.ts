import GetUserApplication from '~application/get-user.application';

import AuthMiddleware from '~controller/auth-middleware';

import JsonWebToken from '../json-web-token';
import UserRepositorieMongoDB from '../mongoDB/repositories/user-repositorie-mongodb';

export default () => {
  const userRepository = new UserRepositorieMongoDB();
  const tokenJwt = new JsonWebToken();
  //aplication
  const getUserApplication = new GetUserApplication(userRepository);
  //middleware
  return new AuthMiddleware(getUserApplication, tokenJwt);
};
