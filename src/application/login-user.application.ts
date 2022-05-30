import Email from '~value-object/email';

import Hash from '~domain-protocol/hash-protocol';
import TokenJwt from '~domain-protocol/token-jwt-protocol';

import LoginInputDTO from '~dto/login-input-dto';
import LoginOutputDTO from '~dto/login-output-dto';

import UserRepositorie from '~repositorie/user-repositorie';

import NotFoundError from '~error/not-found-error';
import UnauthorizedError from '~error/unauthorized-error';

export default class LoginUserApplication {
  constructor(
    private readonly userRepositorie: UserRepositorie,
    private readonly hash: Hash,
    private readonly tokenJwt: TokenJwt,
  ) {}

  async execute(input: LoginInputDTO): Promise<LoginOutputDTO> {
    const user = await this.userRepositorie.findByEmail(new Email(input.email));

    if (!user) throw new NotFoundError('user does not exists');

    const passwordComparison = await this.hash.compare(
      input.password,
      user.getPasword().value,
    );

    if (!passwordComparison) throw new UnauthorizedError('incorrect password');

    return { token: this.tokenJwt.sigin(user.getId()).value };
  }
}
