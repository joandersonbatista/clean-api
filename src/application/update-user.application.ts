import Email from '~value-object/email';
import FullName from '~value-object/full-name';
import Id from '~value-object/id';
import Password from '~value-object/password';

import Hash from '~domain-protocol/hash-protocol';

import UpdateUserInputDTO from '~dto/update-user-input-dto';

import UserRepositorie from '~repositorie/user-repositorie';

import NotFoundError from '~error/not-found-error';

export default class UpdateUserApplication {
  constructor(
    private readonly userRepositorie: UserRepositorie,
    private readonly Hash: Hash,
  ) {}

  async execute(input: UpdateUserInputDTO): Promise<void> {
    const user = await this.userRepositorie.findById(new Id(input.id));

    if (!user) throw new NotFoundError('user does not exists');

    !!input?.name && user.changeName(new FullName(input.name));
    !!input?.email && user.changeEmail(new Email(input.email));
    !!input?.password &&
      user.changePassword(await new Password(input.password).hash(this.Hash));

    await this.userRepositorie.update(user);
  }
}
