import User from '~entity/user';

import Email from '~value-object/email';
import FullName from '~value-object/full-name';
import HashPassword from '~value-object/hash-password';
import Id from '~value-object/id';

import UserRepositorie from '~repositorie/user-repositorie';

import UserModelAttributes from '~infrastructure-interface/user-model-attributes.interface';

import UserModelMongoDB from '../models/user-model-mongodb';

export default class UserRepositorieMongoDB implements UserRepositorie {
  async create(user: User): Promise<void> {
    await UserModelMongoDB.create(this.fromEntityToTable(user));
  }

  async update(user: User): Promise<void> {
    await UserModelMongoDB.findOneAndUpdate(
      { uuid: user.getId().value },
      this.fromEntityToTable(user),
    );
  }

  async findById(id: Id): Promise<User | null> {
    const user = await UserModelMongoDB.findOne({ uuid: id.value });

    if (!user) return null;

    return this.fromTableToEntity(user);
  }

  async findByEmail(email: Email): Promise<User | null> {
    const user = await UserModelMongoDB.findOne({ email: email.value });

    if (!user) return null;

    return this.fromTableToEntity(user as UserModelAttributes);
  }

  async delete(id: Id): Promise<void> {
    await UserModelMongoDB.deleteOne({ uuid: id.value });
  }

  private fromEntityToTable(user: User): UserModelAttributes {
    return {
      uuid: user.getId().value,
      name: user.getName().value,
      email: user.getEmail().value,
      password: user.getPasword().value,
      created_at: user.getCreatedAt(),
      updated_at: user.getUpdatedAt(),
    };
  }

  private fromTableToEntity(user: UserModelAttributes): User {
    return new User(
      new Id(user.uuid),
      new FullName(user.name),
      new HashPassword(user.password),
      new Email(user.email),
      user.created_at,
      user.updated_at,
    );
  }
}
