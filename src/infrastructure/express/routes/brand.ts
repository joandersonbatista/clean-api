import { Router } from 'express';

import useAuth from '~factory/auth';
import useBrand from '~factory/brand';

import { expressMiddlewareAdapter } from '../adapters/express-middleware-adapter';
import { expressRouteAdapter } from './../adapters/express-router-adapter';

export const brandRoutes = Router();
const brand = useBrand();
const auth = useAuth();

brandRoutes.post(
  '/',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(brand.create),
);
brandRoutes.put(
  '/:id',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(brand.update),
);
brandRoutes.get(
  '/:id?',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(brand.get),
);
brandRoutes.delete(
  '/:id',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(brand.delete),
);
