// 微信小程序
export const AppId = '';
export const AppSecret = '';
export const WxUrl = (code: string) => {
  return `https://api.weixin.qq.com/sns/jscode2session?appid=${AppId}&secret=${AppSecret}&js_code=${code}&grant_type=authorization_code`;
};

// 百度Ai

export const BaiDuApiKey = '';
export const BaiDuAppSecret = '';
const BaiDuHostName = 'https://aip.baidubce.com/';
const BaiDuPath = 'oauth/2.0/token';
export const BaiDuUrl = `${BaiDuHostName}${BaiDuPath}?grant_type=client_credentials&client_id=${BaiDuApiKey}&client_secret=${BaiDuAppSecret}`;
export const ImageClassify = (token: string) => {
  return `${BaiDuHostName}rest/2.0/image-classify/v2/advanced_general?access_token=${token}`;
};
