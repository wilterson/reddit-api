import 'reflect-metadata';
import { Router, Request, Response } from 'express';
import api from './api';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Reddit API'
  });
});

routes.use('/api/v1', api);

export default routes;