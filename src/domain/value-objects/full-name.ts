import RequestValidationError from '~error/request-validation-error';

export default class FullName {
  constructor(public readonly value: string) {
    this.validate();
  }

  private validate(): void {
    if (this.value.length <= 0 || this.value === undefined) {
      throw new RequestValidationError('name value should not be empty.');
    }

    if (this.value.split(' ').length < 2) {
      throw new RequestValidationError('name value should have last name.');
    }
  }
}
