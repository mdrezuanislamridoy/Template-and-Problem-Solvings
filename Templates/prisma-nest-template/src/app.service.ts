import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot() {
    return {
      name: 'prisma-nest-template',
      status: 'ok',
    };
  }
}
