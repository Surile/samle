import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('login')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async getCode(@Body() params) {
    return await this.userService.getCode(params.code);
  }
}
