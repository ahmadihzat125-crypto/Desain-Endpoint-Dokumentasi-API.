import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {

  @Get()
  @ApiOperation({ summary: 'Menampilkan daftar destinasi wisata' })
  @ApiResponse({ status: 200, description: 'Daftar destinasi berhasil diambil' })
  findAll() {
    return [
      { id: 1, nama: 'Pantai Kuta Mandalika', kategori: 'Pantai', hargaTiket: 15000 },
      { id: 2, nama: 'Bukit Merese', kategori: 'Gunung', hargaTiket: 10000 },
    ];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail destinasi berdasarkan ID' })
  @ApiResponse({ status: 200, description: 'Detail destinasi ditemukan' })
  findOne(@Param('id') id: string) {
    return { id: Number(id), nama: 'Pantai Kuta Mandalika', kategori: 'Pantai', hargaTiket: 15000 };
  }

  @Post()
  @ApiOperation({ summary: 'Menambahkan destinasi baru (khusus admin)' })
  @ApiResponse({ status: 201, description: 'Destinasi berhasil dibuat' })
  @ApiResponse({ status: 400, description: 'Data tidak valid' })
  create(@Body() dto: CreateDestinasiDto) {
    return { message: 'Destinasi berhasil dibuat', data: dto };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Memperbarui data destinasi' })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil diperbarui' })
  update(@Param('id') id: string, @Body() dto: UpdateDestinasiDto) {
    return { message: `Destinasi dengan ID ${id} berhasil diperbarui`, data: dto };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus data destinasi' })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil dihapus' })
  remove(@Param('id') id: string) {
    return { message: `Destinasi dengan ID ${id} berhasil dihapus` };
  }
}