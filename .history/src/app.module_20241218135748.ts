import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config'

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
