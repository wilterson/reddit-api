import 'reflect-metadata';
import { Router, Request, Response } from 'express';

const swaggerUi = require('swagger-ui-express');

const swaggerOptions = require('../swagger.json');

import PostController from './controller/PostController'
import UserController from './controller/UserController';

const routes = Router();

routes.get('/posts', PostController.index);
routes.get('/users', UserController.index);

// Docs endpoints
routes.use('/docs', swaggerUi.serve);
routes.get('/docs', swaggerUi.setup(swaggerOptions));
export default routes;