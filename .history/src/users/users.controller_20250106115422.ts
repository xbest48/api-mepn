import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile
}
