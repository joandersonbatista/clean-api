import Email from '~value-object/email';
import FullName from '~value-object/full-name';
import HashPassword from '~value-object/hash-password';
import Id from '~value-object/id';

export default class User {
  constructor(
    private readonly id: Id,
    private name: FullName,
    private password: HashPassword,
    private email: Email,
    private readonly createdAt: Date,
    private updatedAt?: Date,
  ) {}

  public getId(): Id {
    return this.id;
  }

  public getName(): FullName {
    return this.name;
  }

  public getPasword(): HashPassword {
    return this.password;
  }

  public getEmail(): Email {
    return this.email;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }

  public changeName(name: FullName): void {
    this.name = name;

    this.updateUser(new Date());
  }

  public changePassword(password: HashPassword): void {
    this.password = password;

    this.updateUser(new Date());
  }

  public changeEmail(email: Email): void {
    this.email = email;

    this.updateUser(new Date());
  }

  private updateUser(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}
