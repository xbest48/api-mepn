import { CreateArticleDto } from './dto/create-article.dto';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModule('Article') private readonly articleModel: Model<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article>{
    const createdArticle = new this.articleModel(createArticleDto);
    return await createdArticle.save();
  }
}
