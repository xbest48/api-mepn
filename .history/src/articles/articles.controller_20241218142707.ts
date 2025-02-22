import { Controller } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {}

    @Post()
    async createArticle(@Body() createArticleDto: CreateArticleDto) {
        return this.articlesService.create(creat)
    }
}
