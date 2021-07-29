import * as request from 'supertest';
import * as express from 'express';

const app = express();

describe('app', () => {
  it('responds with a not found message', (done) => {
    request(app)
      .get('/random-route')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });

  it('responds with a not found message in api namespace', (done) => {
    request(app)
      .get('/api/v1/random-route')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'Reddit API'
      }, done);
  });
});
