import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from './type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  providers: [TypeService],
  controllers: [TypeController],
})
export class TypeModule {}
