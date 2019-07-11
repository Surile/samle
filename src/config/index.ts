export const AppId = 'wx0aff2856cea0f6f8';
export const AppSecret = 'ce00b32011bf886c2aad3bd7849c6548';
export const WxUrl = (code: string) => {
  return `https://api.weixin.qq.com/sns/jscode2session?appid=${AppId}&secret=${AppSecret}&js_code=${code}&grant_type=authorization_code`;
};

// 百度Ai

export const BaiDuApiKey = 'Pbl6GyPgyWQa6bfIH2rfdkFi';
export const BaiDuAppSecret = 'VIOqGmsOobQORXdoL2KVf87F8yYCmZxX';
const BaiDuHostName = 'https://aip.baidubce.com/';
const BaiDuPath = 'oauth/2.0/token';
export const BaiDuUrl = `${BaiDuHostName}${BaiDuPath}?grant_type=client_credentials&client_id=${BaiDuApiKey}&client_secret=${BaiDuAppSecret}`;
export const ImageClassify = (token: string) => {
  return `${BaiDuHostName}rest/2.0/image-classify/v2/advanced_general?access_token=${token}`;
};
