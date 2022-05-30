import DefaultApplicationError from '~error/default-application-error';

export default class RequestValidationError extends DefaultApplicationError {
  statusCode = 400;
  name = 'RequestValidationError';
}
