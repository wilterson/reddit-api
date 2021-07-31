import * as Queue from 'bull';
import * as jobs from '../jobs/';

const queues = Object.values(jobs).map(job => ({
  bull: new Queue('redis', {
    redis: {
      host: 'redis',
      port: 6379,
      password: 'dockerRedis'
    }
  }),
  name: job.key,
  handle: job.handle
}))

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find(queue => queue.name === name);

    return queue.bull.add(data, queue.options);
  },
  process() {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, err) => {
        console.log('Job failed', queue.key, job.data);
        console.log(err);
      });
    })
  }
};