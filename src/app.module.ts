import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './server/user/user.module';
import { TypeModule } from './server/type/type.module';
import { GoodsModule } from './server/goods/goods.module';
@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, TypeModule, GoodsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
