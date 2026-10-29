import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@Injectable()
export class DestinasiService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.destinasi.findMany();
  }

  async findOne(id: number) {
    const destinasi = await this.prisma.destinasi.findUnique({ where: { id } });

    if (!destinasi) {
      throw new NotFoundException(`Destinasi with ID ${id} not found`);
    }

    return destinasi;
  }

  create(dto: CreateDestinasiDto) {
    return this.prisma.destinasi.create({ data: dto });
  }

  async update(id: number, dto: UpdateDestinasiDto) {
    await this.findOne(id);
    return this.prisma.destinasi.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.destinasi.delete({ where: { id } });
  }
}
