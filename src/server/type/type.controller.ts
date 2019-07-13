import {
  Controller,
  Body,
  HttpStatus,
  Post,
  Get,
  Res,
  Param,
} from '@nestjs/common';
import { TypeService } from './type.service';
import { ApiErrorCode } from '../../core/status/api-error-code.enum';
import { CreateTypeDto } from './dto/create-type_dto';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Get(':id')
  async findOne(@Param('id') id, @Res() res) {
    const data = await this.typeService.findOne(id);
    if (data) {
      res.status(HttpStatus.OK).send({
        errorCode: ApiErrorCode.SUCCESS,
        errorMessage: '请求成功',
        data,
      });
    } else {
      res.status(HttpStatus.OK).send({
        errorCode: ApiErrorCode.SUCCESS,
        errorMessage: 'ID无效',
      });
    }
  }

  // @Post()
  // async createType(@Body() params: CreateTypeDto, @Res() res) {
  //   const data = {
  //     title: params.title,
  //     describe: params.describe,
  //     status: 1,
  //   };
  //   const respose = await this.typeService.createType(data);
  //   if (respose) {
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
    return res.status(HttpStatus.OK).send({
      errorCode: ApiErrorCode.SUCCESS,
      errorMessage: '请求成功',
      data: await this.typeService.findAll(),
    });
  }

  // @Post('modify')
  // async deleteType(@Body() params, @Res() res) {
  //   const data = await this.typeService.deleteType(params.id, params.status);
  //   if (data) {
  //     res.status(HttpStatus.OK).send({
  //       errorCode: ApiErrorCode.SUCCESS,
  //       errorMessage: '修改成功',
  //     });
  //   } else {
  //     res.status(HttpStatus.OK).send({
  //       errorCode: ApiErrorCode.SUCCESS,
  //       errorMessage: '系统繁忙，请稍后再试',
  //     });
  //   }
  // }
}
