import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { PrismaClient } from '../../../prisma/generated/prisma/client.js';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);
  private readonly prisma: PrismaClient;

  constructor() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error('DATABASE_URL must be set in environment variables.');
    }

    const adapter = new PrismaPg({ connectionString });

    super({
      adapter,
      log: [{ emit: 'event', level: 'error' }],
    });

    this.prisma = new PrismaClient({
      adapter,
      log: [{ emit: 'event', level: 'error' }],
    });
  }

  async onModuleInit() {
    this.logger.log('[INIT] Prisma connecting...');
    await this.prisma.$connect();
    this.logger.log('[INIT] Prisma connected');
  }

  async onModuleDestroy() {
    this.logger.log('[DESTROY] Prisma disconnecting...');
    await this.prisma.$disconnect();
    this.logger.log('[DESTROY] Prisma disconnected');
  }

  get client() {
    return this.prisma;
  }
}
