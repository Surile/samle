import { Injectable, HttpService } from '@nestjs/common';
import { BaiDuUrl, ImageClassify } from '../../config/index';
import querystring from 'querystring';
import { map } from 'rxjs/operators';
@Injectable()
export class ImageService {
  constructor(private readonly httpService: HttpService) {}

  async getAssetToken() {
    return await this.httpService
      .get(BaiDuUrl)
      .pipe(map(response => response.data));
  }

  async imageClassfiy(token: string, base64: string) {
    const url = ImageClassify(token);
    return await this.httpService
      .post(
        url,
        querystring.stringify({
          image: base64,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .pipe(
        map(res => {
          return res.data;
        }),
      );
  }
}
