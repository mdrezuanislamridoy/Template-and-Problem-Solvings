import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../config/prisma/prisma.service';

@Controller('health')
export class HealthController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async check() {
    await this.prismaService.client.$queryRaw`SELECT 1`;

    return {
      status: 'ok',
      database: 'ok',
    };
  }
}
