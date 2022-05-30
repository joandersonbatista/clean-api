import DefaultApplicationError from '~error/default-application-error';

export default class UnauthorizedError extends DefaultApplicationError {
  name = 'UnauthorizedError';
  statusCode = 401;
}
