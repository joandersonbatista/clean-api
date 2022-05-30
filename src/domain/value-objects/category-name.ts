import RequestValidationError from '~error/request-validation-error';

export default class CategoryName {
  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (this.value.length <= 0 || this.value === undefined) {
      throw new RequestValidationError(
        'category name value should not be empty.',
      );
    }
  }
}
