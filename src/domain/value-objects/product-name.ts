import RequestValidationError from '~error/request-validation-error';

export default class ProductName {
  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (this.value.length <= 0 || this.value === undefined) {
      throw new RequestValidationError(
        'product name value should not be empty.',
      );
    }
  }
}
