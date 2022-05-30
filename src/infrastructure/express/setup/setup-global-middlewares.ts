import cors from 'cors';
import { Application, json, urlencoded } from 'express';
import helmet from 'helmet';

export const setupGlobalMiddlewares = (app: Application): void => {
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());
  app.use(helmet());
};
