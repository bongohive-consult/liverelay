// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookModule } from './webhook/webhook.module'; // Assuming you have a Webhook module
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST') || 'localhost',
        port: parseInt(configService.get<string>('DB_PORT'), 10) || 5432,
        username: configService.get<string>('DB_USERNAME') || 'uncledev',
        password: configService.get<string>('DB_PASSWORD') || 'yourpassword',
        database: configService.get<string>('DB_DATABASE') || 'liverelay',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // Disable in production!
      }),
    }),
    WebhookModule, // Your existing module
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
