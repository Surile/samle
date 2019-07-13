import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './type.entity';
import { Repository } from 'typeorm';
import { CreateTypeDto } from './dto/create-type_dto';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>,
  ) {}

  // async createType(params: CreateTypeDto) {
  //   const data = await this.typeRepository.create(params);
  //   return await this.typeRepository.save(data);
  // }

  async findAll() {
    const data = await this.typeRepository.find({
      relations: ['details'],
    });
    return data.filter(item => item.status === 1);
  }

  // async deleteType(id: number, status: number) {
  //   const data = await this.typeRepository.findOne(id);
  //   data.status = status;
  //   return this.typeRepository.save(data);
  // }

  async findOne(id: number) {
    return await this.typeRepository.findOne({
      relations: ['details'],
      where: { id },
    });
  }
}
