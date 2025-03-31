import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpExceptionFilter } from './core/filters/http-exception.filter';
import { ValidationPipe } from './core/pipes/validation.pipe';
import { TransformInterceptor } from './core/interceptors/transform.interceptor';
import { Config, ENV } from './core/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = app.get<Config>(ENV);

  const globalPrefix = config.GLOBAL_PREFIX;

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor(new Reflector()));
  app.setGlobalPrefix(globalPrefix);
  app.enableVersioning();

  const environment =
    config.NODE_ENV == 'development'
      ? config.FRONTEND_URL_DEV
      : config.FRONTEND_URL_PROD;

  console.log(environment, 'environment');
  app.enableCors({
    origin: [environment],
    methods: '*',
    credentials: true,
  });

  const port = config.PORT;

  await app.listen(port);
}
bootstrap();
