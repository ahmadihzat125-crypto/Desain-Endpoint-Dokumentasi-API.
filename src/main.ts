import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs'; // Diperlukan untuk Langkah 5 (Ekspor openapi.json)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Mengaktifkan ValidationPipe secara global (Modul Bagian 2.3.2)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Konfigurasi Swagger DocumentBuilder (Modul Bagian 2.3.3)
  const config = new DocumentBuilder()
    .setTitle('Wisataku API')
    .setDescription('API untuk platform informasi dan reservasi destinasi wisata')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Langkah 5: Ekspor dokumen OpenAPI ke file openapi.json di root project
  fs.writeFileSync('./openapi.json', JSON.stringify(document, null, 2));

  await app.listen(3000);
}
bootstrap();