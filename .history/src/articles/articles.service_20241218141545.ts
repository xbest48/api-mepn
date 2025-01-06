import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
    constructor(@InjectModule('Article') private readonly article)
}
