import { Injectable, HttpService } from '@nestjs/common';
import { BaiDuUrl, ImageClassify } from '../../config/index';
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
      .request({
        url,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          image: base64,
        },
      })
      .pipe(
        map(res => {
          return res.data;
        }),
      );
  }
}
