import { NextFunction, Request, Response } from 'express';

import MethodController from '~presentation-interface/method-controller-interface';

import DefaultApplicationError from '~error/default-application-error';

export const expressRouteAdapter = <ResponseBody>(
  methodController: MethodController<ResponseBody>,
) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    return Promise.resolve(
      methodController({
        query: request.query,
        params: request.params,
        body: request.body,
        headers: request.headers,
        method: request.method,
      }),
    )
      .then((controllerResponse) => {
        response
          .status(controllerResponse.statusCode)
          .json(controllerResponse.body);
        return next();
      })
      .catch((error: DefaultApplicationError) => {
        return next(error);
      });
  };
};
