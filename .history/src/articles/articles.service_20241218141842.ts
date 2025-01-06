import { CreateArticleDto } from './../../.history/src/articles/dto/create-article.dto_20241218141436';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModule('Article') private readonly articleModel: Model<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article>{
    const createdArticle = new 
  }
}
