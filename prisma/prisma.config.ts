import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: './schema.prisma', // Karena filenya satu folder, cukup arahkan ke sini
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});