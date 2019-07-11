import { Module, HttpModule } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  imports:[HttpModule],
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule {}
