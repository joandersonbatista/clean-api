import RequestValidationError from '~error/request-validation-error';

export default class HashPassword {
  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (this.value.length <= 0 || this.value === undefined) {
      throw new RequestValidationError(
        'password hash value should not be empty.',
      );
    }

    if (this.value.length < 60) {
      throw new RequestValidationError(
        'password hash must be at least 60 characters',
      );
    }
  }
}
