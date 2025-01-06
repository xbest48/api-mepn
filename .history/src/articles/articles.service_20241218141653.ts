import { Injectable } from '@nestjs/common';
import { InjectModel } from ''

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModule('Article') private readonly articleModel: Model<Article>,
  ) {}
}
