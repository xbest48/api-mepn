import { Controller } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticleSe)
}
