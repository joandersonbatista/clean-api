import RequestValidationError from '~error/request-validation-error';

export default class Token {
  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (this.value.length <= 0) {
      throw new RequestValidationError('Token value should not be empty.');
    }
  }
}
