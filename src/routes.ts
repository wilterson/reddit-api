import 'reflect-metadata';
import { Router, Request, Response } from 'express';

import PostController from './controller/PostController'
import UserController from './controller/UserController';

const routes = Router();

routes.get('/posts', PostController.index);
routes.get('/users', UserController.index);

export default routes;