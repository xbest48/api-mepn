import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModule('Article') private readonly articleModel: Model<Article>,
  ) {}
}
function InjectModule(arg0: string): (target: typeof ArticlesService, propertyKey: undefined, parameterIndex: 0) => void {
    throw new Error('Function not implemented.');
}

