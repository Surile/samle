import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Goods } from './goods.entity';
import { Repository } from 'typeorm';
import { CreateGoodDto } from './dto/create-good_dto';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Goods)
    private readonly goodsRepository: Repository<Goods>,
  ) {}

  async findAll(typeid) {
    const data = await this.goodsRepository.find(typeid);

    console.log(data);

    return data.filter(item => (item.status = 1));
  }

  async createGood(params: CreateGoodDto) {
    const data = await this.goodsRepository.create(params);
    data.status = 1;
    return await this.goodsRepository.save(data);
  }

  async removeGood(id: number, status: number) {
    const data = await this.goodsRepository.findOne(id);
    data.status = status;
    return await this.goodsRepository.save(data);
  }
}
