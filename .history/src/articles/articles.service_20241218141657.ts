import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nest'

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModule('Article') private readonly articleModel: Model<Article>,
  ) {}
}
