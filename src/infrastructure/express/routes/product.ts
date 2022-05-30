import { Router } from 'express';

import useAuth from '~factory/auth';
import useProduct from '~factory/product';

import { expressMiddlewareAdapter } from '../adapters/express-middleware-adapter';
import { expressRouteAdapter } from './../adapters/express-router-adapter';

export const productRoutes = Router();
const product = useProduct();
const auth = useAuth();

productRoutes.post(
  '/',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(product.create),
);
productRoutes.put(
  '/:id',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(product.update),
);
productRoutes.delete(
  '/:id',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(product.delete),
);
productRoutes.get(
  '/:id?',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(product.get),
);
