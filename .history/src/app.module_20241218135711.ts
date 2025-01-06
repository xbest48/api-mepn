import { Module } from '@nestjs/common';
import { MongooseModule } from
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}