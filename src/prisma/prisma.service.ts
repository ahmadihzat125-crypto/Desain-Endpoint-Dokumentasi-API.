import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super(); // Di Prisma v7, pastikan memanggil super() dengan benar
  }

  async onModuleInit() {
    await this.$connect();
  }
}

export { PrismaService };