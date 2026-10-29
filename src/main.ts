import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module'; // <--- Tambahkan ObserveInstrument di sini
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs'; 

async function bootstrap() {
  // Tambahkan objek konfigurasi { instrument: ObserveInstrument } di sini
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

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
  SwaggerModule.setup('destinasi/api/docs', app, document);

  // Langkah 5: Ekspor dokumen OpenAPI ke file openapi.json di root project
  fs.writeFileSync('./openapi.json', JSON.stringify(document, null, 2));

  await app.listen(3000);
}
bootstrap();