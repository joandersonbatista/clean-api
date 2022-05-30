import { Application } from 'express';

import { brandRoutes } from '../routes/brand';
import { categoryRoutes } from '../routes/category';
import { productRoutes } from '../routes/product';
import { userRoutes } from '../routes/user';
import { rateLimiter } from './setup-rate-limit';

export const setupRoutes = (app: Application): void => {
  app.use('/user', rateLimiter, userRoutes);
  app.use('/brand', rateLimiter, brandRoutes);
  app.use('/category', rateLimiter, categoryRoutes);
  app.use('/product', rateLimiter, productRoutes);
};
