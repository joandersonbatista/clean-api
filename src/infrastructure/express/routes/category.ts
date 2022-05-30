import { Router } from 'express';

import useAuth from '~factory/auth';
import useCategory from '~factory/category';

import { expressMiddlewareAdapter } from '../adapters/express-middleware-adapter';
import { expressRouteAdapter } from './../adapters/express-router-adapter';

export const categoryRoutes = Router();
const category = useCategory();
const auth = useAuth();

categoryRoutes.post(
  '/',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(category.create),
);
categoryRoutes.put(
  '/:id',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(category.update),
);
categoryRoutes.delete(
  '/:id',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(category.delete),
);
categoryRoutes.get(
  '/:id?',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(category.get),
);
