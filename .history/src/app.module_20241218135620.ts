import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.for],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
