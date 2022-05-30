import DefaultApplicationError from '~error/default-application-error';

export default class BadRequestError extends DefaultApplicationError {
  name = 'BadRequestError';
  statusCode = 400;
}
