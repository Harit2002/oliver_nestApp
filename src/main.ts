import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  const config = new DocumentBuilder()
    .setTitle('Oliver website sample api')
    .setDescription('The api where we can add our work and case study.')
    .setVersion('1.0')
    .addTag('Oliver')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8888);
}
bootstrap();
