import RequestValidationError from '~error/request-validation-error';

export default class Price {
  constructor(public readonly value: number) {
    this.validate();
  }

  private validate(): void {
    if (this.value === undefined) {
      throw new RequestValidationError('price value should not be empty.');
    }

    if (this.value <= 0) {
      throw new RequestValidationError('invalid price');
    }
  }
}
