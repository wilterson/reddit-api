import 'reflect-metadata';
import * as express from 'express';
import { Request, Response } from 'express';

import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';

import routes from './routes';
import middlewares from './middlewares';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 3300;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
