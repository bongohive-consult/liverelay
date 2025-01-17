// src/data-source.ts
import { DataSource } from 'typeorm';
import { Webhook } from './webhook/entities/webhook.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'uncledev',
  password: process.env.DB_PASSWORD || 'liverelay_postgres25',
  database: process.env.DB_DATABASE || 'liverelay',
  entities: [Webhook],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // Set to false when using migrations
});
