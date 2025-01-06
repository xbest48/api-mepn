import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from './models/article.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Article', schema: Articl}])
    ]
})
export class ArticlesModule {}
