import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './server/user/user.module';
import { TypeModule } from './server/type/type.module';
import { GoodsModule } from './server/goods/goods.module';
import { ImageModule } from './server/image/image.module';
@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, TypeModule, GoodsModule, ImageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
