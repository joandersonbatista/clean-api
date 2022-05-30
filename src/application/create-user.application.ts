import User from '~entity/user';

import Email from '~value-object/email';
import FullName from '~value-object/full-name';
import Id from '~value-object/id';
import Password from '~value-object/password';

import Hash from '~domain-protocol/hash-protocol';
import IdGenerator from '~domain-protocol/id-generator-protocol';

import CreateUserInputDTO from '~dto/create-user-input-dto';

import UserRepositorie from '~repositorie/user-repositorie';

import ExistsError from '~error/exists-error';

export default class CreateUserApplication {
  constructor(
    private readonly userRepositorie: UserRepositorie,
    private readonly idGenerator: IdGenerator,
    private readonly hash: Hash,
  ) {}

  async execute(input: CreateUserInputDTO): Promise<void> {
    const email = new Email(input.email);

    const user = await this.userRepositorie.findByEmail(email);

    if (user) throw new ExistsError('e-mail already exists');

    const id = new Id(this.idGenerator.generate());
    const fullName = new FullName(input.name);
    const password = await new Password(input.password).hash(this.hash);
    const createdAt = new Date();

    const createdUser = new User(id, fullName, password, email, createdAt);

    await this.userRepositorie.create(createdUser);
  }
}
