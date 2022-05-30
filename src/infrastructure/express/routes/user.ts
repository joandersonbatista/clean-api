import { Router } from 'express';

import useAuth from '~factory/auth';
import useUser from '~factory/user';

import { expressMiddlewareAdapter } from '../adapters/express-middleware-adapter';
import { expressRouteAdapter } from '../adapters/express-router-adapter';

export const userRoutes = Router();
const user = useUser();
const auth = useAuth();

userRoutes.post('/', expressRouteAdapter(user.create));
userRoutes.post('/login', expressRouteAdapter(user.login));
userRoutes.delete(
  '/',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(user.delete),
);
userRoutes.put(
  '/',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(user.update),
);
userRoutes.get(
  '/',
  expressMiddlewareAdapter(auth.auth),
  expressRouteAdapter(user.get),
);
