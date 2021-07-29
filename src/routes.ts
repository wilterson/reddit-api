import 'reflect-metadata';
import { Router, Request, Response } from 'express';

import { listPosts } from './controller/PostController'

const routes = Router();

routes.get('/posts', listPosts);

export default routes;