import { NextFunction, Request } from 'express';

import MethodMiddleware from '~presentation-interface/method-middleware-interface';

import DefaultApplicationError from '~error/default-application-error';

export const expressMiddlewareAdapter = (
  methodMiddleware: MethodMiddleware,
) => {
  return async (request: Request, response, next: NextFunction) => {
    return Promise.resolve(
      methodMiddleware({
        query: request.query,
        params: request.params,
        body: request.body,
        headers: request.headers,
        method: request.method,
      }),
    )
      .then(() => {
        return next();
      })
      .catch((error: DefaultApplicationError) => {
        return next(error);
      });
  };
};
