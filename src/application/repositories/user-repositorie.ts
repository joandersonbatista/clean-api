import User from '~entity/user';

import Email from '~value-object/email';
import Id from '~value-object/id';

export default interface UserRepositorie {
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  findById(id: Id): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
  delete(id: Id): Promise<void>;
}
