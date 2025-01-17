import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 4030;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add the following line to parse the raw body of the request some webhooks may send in JSON format

  app.use('/webhook', bodyParser.raw({ type: 'application/json' }));

  await app.listen(PORT);
}
bootstrap();
