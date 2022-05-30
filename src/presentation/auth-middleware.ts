import Token from '~value-object/token';

import TokenJwtProtocol from '~domain-protocol/token-jwt-protocol';

import GetUserApplication from '~application/get-user.application';

import AuthRequest from '~request/auth-request';

import MethodMiddleware from '~presentation-interface/method-middleware-interface';

import UnauthorizedError from '~error/unauthorized-error';

export default class AuthMiddleware {
  constructor(
    private readonly getUserApplication: GetUserApplication,
    private readonly tokenJwtProtocol: TokenJwtProtocol,
  ) {}

  auth: MethodMiddleware = async (req: AuthRequest) => {
    const { authorization } = req.headers;

    if (!authorization) throw new UnauthorizedError('login is required');

    const [, token] = authorization.split(/\s+/);

    const { value: id } = this.tokenJwtProtocol.verify(new Token(token));

    await this.getUserApplication.execute({ id });

    req.headers.userId = id;
  };
}
