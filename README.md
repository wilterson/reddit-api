# Reddit API

Technologies:

- [express](https://expressjs.com/pt-br/)
  - Fast, unopinionated, minimalist web framework for Node.js
- [typeorm](https://typeorm.io/)
  - TypeORM is an ORM that can run in NodeJS
- [bull](https://github.com/OptimalBits/bull)
  - Premium Queue package for handling distributed jobs and messages in NodeJS.
- [postgres](https://www.postgresql.org/)
  - Postgres Database
- [node-schedule](https://github.com/node-schedule/node-schedule)
  - A cron-like and not-cron-like job scheduler for Node.
- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [docker](https://www.docker.com/)
  - Docker containers with docker-compose
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`

Development utilities:

- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [mocha](https://www.npmjs.com/package/mocha)
  - ☕️ Simple, flexible, fun JavaScript test framework for Node.js & The Browser ☕️
- [supertest](https://www.npmjs.com/package/supertest)
  - HTTP assertions made easy via superagent.

## Setup

After cloning this repository

```
npm install
```

and then run:

```
docker-compose up
```

Now, you can access [localhost:3000/api/v1/docs](http://localhost:3000/api/v1/docs) to see the API Doc;

## Cron Job

The cron job are scheduled to run every day at 12am, so to see the reddit posts at app startup you could change the cron. :)
