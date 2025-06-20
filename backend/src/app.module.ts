import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PageController } from './page.controller';

@Module({
  controllers: [AuthController, PageController],
})
export class AppModule {}
