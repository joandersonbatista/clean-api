import DefaultApplicationError from '~error/default-application-error';

export default class NotFoundError extends DefaultApplicationError {
  statusCode = 404;
  name = 'NotFoundError';
}
