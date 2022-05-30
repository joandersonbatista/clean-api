import Id from '~value-object/id';

import GetUserOutputDTO from '~dto/get-user-output-dto';
import IdInputDTO from '~dto/id-input-dto';

import UserRepositorie from '~repositorie/user-repositorie';

import NotFoundError from '~error/not-found-error';

export default class GetUserApplication {
  constructor(private readonly userRepositorie: UserRepositorie) {}

  async execute(input: IdInputDTO): Promise<GetUserOutputDTO> {
    const id = new Id(input.id);

    const user = await this.userRepositorie.findById(id);

    if (!user) throw new NotFoundError('user does not exists');

    return {
      id: id.value,
      name: user.getName().value,
      email: user.getEmail().value,
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    };
  }
}
