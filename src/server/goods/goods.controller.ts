import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Get,
  Param,
} from '@nestjs/common';
import { GoodsService } from './goods.service';
import { CreateGoodDto } from './dto/create-good_dto';
import { ApiErrorCode } from '../../core/status/api-error-code.enum';

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  // @Post()
  // async createGood(@Body() params: CreateGoodDto, @Res() res): Promise<any> {
  //   const data = await this.goodsService.createGood(params);
  //   if (data) {
  //     return res.status(HttpStatus.OK).send({
  //       errorCode: ApiErrorCode.SUCCESS,
  //       errorMessage: '创建成功',
  //     });
  //   } else {
  //     return res.status(HttpStatus.OK).send({
  //       errorCode: ApiErrorCode.SUCCESS,
  //       errorMessage: '系统繁忙，请稍后再试',
  //     });
  //   }
  // }

  @Get()
  async findAll(@Res() res) {
    const data = await this.goodsService.findAll();
    if (data) {
      return res.status(HttpStatus.OK).send({
        errorCode: ApiErrorCode.SUCCESS,
        errorMessage: '请求成功',
        data,
      });
    } else {
      return res.status(HttpStatus.OK).send({
        errorCode: ApiErrorCode.SUCCESS,
        errorMessage: '无效typeid',
      });
    }
  }

  // @Post('modify')
  // async removeGood(@Body() params, @Res() res) {
  //   const data = this.goodsService.removeGood(params.id, params.status);
  //   if (data) {
  //     return res.status(HttpStatus.OK).send({
  //       errorCode: ApiErrorCode.SUCCESS,
  //       errorMessage: '修改成功',
  //     });
  //   } else {
  //     return res.status(HttpStatus.OK).send({
  //       errorCode: ApiErrorCode.SUCCESS,
  //       errorMessage: '系统繁忙，请稍后再试',
  //     });
  //   }
  // }

  @Post('search')
  async serach(@Body() params, @Res() res) {
    return res.status(HttpStatus.OK).send({
      errorCode: ApiErrorCode.SUCCESS,
      errorMessage: '请求成功',
      data: await this.goodsService.searchGood(params.title),
    });
  }
}
