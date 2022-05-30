import { Express, Request, Response, NextFunction } from 'express';

import DefaultApplicationError from '~error/default-application-error';

export const setupAsyncErrors = (app: Express): void => {
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    if (!error) {
      return next();
    }

    if (!(error instanceof DefaultApplicationError)) {
      return res.status(500).json({
        error: error.name,
        message: 'Something went wrong',
        statusCode: 500,
      });
    }

    return res.status(error.statusCode).json({
      error: error.name,
      message: error.message,
      statusCode: error.statusCode,
    });
  });
};
