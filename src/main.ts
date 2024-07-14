import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`APP LAUNCHED AT ${process.env.PORT}`)
  await app.listen(process.env.PORT);
}
bootstrap();
