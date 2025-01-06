import { Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(AuthGuard('loc   l'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
