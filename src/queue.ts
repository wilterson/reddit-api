import Queue from './lib/Queue';
import { createConnection } from 'typeorm';

import 'dotenv/config';

createConnection();

Queue.process();