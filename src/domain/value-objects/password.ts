import HashPassword from '~value-object/hash-password';

import Hash from '~domain-protocol/hash-protocol';

import RequestValidationError from '~error/request-validation-error';

export default class Password {
  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (this.value.length <= 0 || this.value === undefined) {
      throw new RequestValidationError('password value should not be empty.');
    }

    if (this.value.length < 6) {
      throw new RequestValidationError(
        'password must be at least 6 characters',
      );
    }
  }

  async hash(hasher: Hash): Promise<HashPassword> {
    return new HashPassword(await hasher.hash(this.value));
  }
}
