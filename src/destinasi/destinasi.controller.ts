import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';
import { DestinasiService } from './destinasi.service'; // <-- Wajib di-import

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {
  constructor(private readonly destinasiService: DestinasiService) {}

  @Get()
  @ApiOperation({ summary: 'Menampilkan daftar destinasi wisata' })
  findAll() {
    return this.destinasiService.findAll(); // Mengambil dari database
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail destinasi berdasarkan ID' })
  findOne(@Param('id') id: string) {
    return this.destinasiService.findOne(+id); // Mengirim ID ke service
  }

  @Post()
  @ApiOperation({ summary: 'Menambahkan destinasi baru' })
  create(@Body() dto: CreateDestinasiDto) {
    return this.destinasiService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Memperbarui data destinasi' })
  update(@Param('id') id: string, @Body() dto: UpdateDestinasiDto) {
    return this.destinasiService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus data destinasi' })
  remove(@Param('id') id: string) {
    return this.destinasiService.remove(+id);
  }
}