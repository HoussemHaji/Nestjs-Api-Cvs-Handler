import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSubscribeDto } from './dto/user-subscribe.dto';
import { LoginDto } from './dto/login-credentials.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async subscribe(@Body() user: UserSubscribeDto) {
    return this.userService.subscribe(user);
  }

  @Get('login')
  async login(@Body() credentials: LoginDto) {
    return this.userService.login(credentials);
  }
}
