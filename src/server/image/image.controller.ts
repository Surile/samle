import {
  Controller,
  Post,
  Body,
  Get,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  async getBaiDuToken(@Body() params) {
    return await this.imageService.getAssetToken();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async searchImage(@UploadedFile() file, @Body() params) {
    const data = file.buffer.toString('base64');
    return await this.imageService.imageClassfiy(params.token, data);
  }
}
