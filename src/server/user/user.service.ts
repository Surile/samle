import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { WxUrl } from '../../config';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepoitory: Repository<User>,
    private readonly httpService: HttpService,
  ) {}

  getCode(code: string) {
    const url = WxUrl(code);
    return this.httpService.get(url).pipe(
      map(async response => {
        if (response.data.openid) {
          const res = await this.userRepoitory.findOne({
            openid: response.data.openid,
          });
          if (res) {
            return res;
          } else {
            const data = this.userRepoitory.create({
              openid: response.data.openid,
            });
            return this.userRepoitory.save(data);
          }
        } else {
          return response.data;
        }
      }),
    );
  }
}
