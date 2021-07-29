import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DBHOST || 'db',
  database: process.env.DBDATABASE || 'reddit_api',
  username: process.env.DBUSERNAME || 'postgres',
  password: process.env.DBPASSWORD || 'docker',
  entities: ['**/src/entity/*{.ts,.js}'],
  migrations: ['build/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  synchronize: true,
};

export default config;
