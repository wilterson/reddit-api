import 'reflect-metadata';
import * as express from 'express';

import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';

import { Request, Response } from 'express';

import { createConnection } from 'typeorm';

import routes from './routes';
import middlewares from './middlewares';

require('dotenv').config();

const app = express();

createConnection();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Reddit API'
  });
});

app.use('/api/v1', routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 3300;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
