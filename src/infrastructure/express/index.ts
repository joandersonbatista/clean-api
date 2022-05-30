import express from 'express';

import { setupAsyncErrors } from './setup/setup-async-errors';
import { setupGlobalMiddlewares } from './setup/setup-global-middlewares';
import { setupRoutes } from './setup/setup-routes';

export const app = express();

setupGlobalMiddlewares(app);
setupRoutes(app);
setupAsyncErrors(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening -> http://localhost:${port}`);
});
