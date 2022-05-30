export default class DefaultApplicationError extends Error {
  public statusCode = 500;

  constructor(message?: string) {
    super(message);
    this.message = message || this.name;
    this.name = 'DefaultApplicationError';
  }
}
