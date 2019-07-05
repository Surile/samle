import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getCode(@Body() params) {
    return await this.appService.getCode(params.code);
  }
}
