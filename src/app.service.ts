import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { WxUrl } from './config';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getCode(code: string): Observable<AxiosResponse<any>> {
    const url = WxUrl(code);
    return this.httpService.get(url).pipe(map(response => response.data));
  }
}
