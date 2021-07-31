import { scheduleJob } from 'node-schedule';
import Queue from './lib/Queue';

// Run schedule at 12am on every day
scheduleJob('0 00 */1 * *', async () => {
  await Queue.add('FetchRedditPosts', {});
})