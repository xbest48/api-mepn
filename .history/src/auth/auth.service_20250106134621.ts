import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jw'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUSerDto: CreateUserDto) {
    this.usersService.create(createUSerDto);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      // returns the result without the password property
      return result;
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    const foundUser = await this.usersService.findOne(loginUserDto.email);
    if (!foundUser) {
      throw new NotFoundException(`email or password incorrect`);
    }
    if (foundUser.password !== loginUserDto.password) {
      throw new NotFoundException(`email or password incorrect`);
    }
    const payload = {
      createdAt: new Date().toISOString(),
      sub: foundUser._id,
      role: '',
    };
    if (foundUser.email === 'sam@t.fr') {
      payload.role = 'admin';
    } else {
      payload.role = 'user';
    }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
