import Id from '~value-object/id';

import IdInputDTO from '~dto/id-input-dto';

import UserRepositorie from '~repositorie/user-repositorie';

import NotFoundError from '~error/not-found-error';

export default class DeleteUserApplication {
  constructor(private readonly userRepositorie: UserRepositorie) {}

  async execute(input: IdInputDTO): Promise<void> {
    const id = new Id(input.id);

    const user = await this.userRepositorie.findById(id);

    if (!user) throw new NotFoundError('user does not exists');

    await this.userRepositorie.delete(id);
  }
}
