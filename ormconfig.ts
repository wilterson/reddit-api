import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: process.env.DBHOST || 'db',
  database: process.env.DBDATABASE || 'reddit_api',
  username: process.env.DBUSERNAME || 'postgres',
  password: process.env.DBPASSWORD || 'docker',
  // entities: ['**/src/entity/*{.ts,.js}'],
  entities: ['build/entity/**/*.js'],
  migrations: ['build/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: true,
};

export default config;
