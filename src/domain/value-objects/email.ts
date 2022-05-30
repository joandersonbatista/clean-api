import RequestValidationError from '~error/request-validation-error';

export default class Email {
  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (this.value.length <= 0 || this.value === undefined) {
      throw new RequestValidationError('email value should not be empty.');
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value)) {
      throw new RequestValidationError('email should be valid');
    }
  }
}
