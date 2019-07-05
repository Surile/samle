export const AppId = 'wx0aff2856cea0f6f8';
export const AppSecret = 'ce00b32011bf886c2aad3bd7849c6548';
export const WxUrl = (code: string) => {
  return `https://api.weixin.qq.com/sns/jscode2session?appid=${AppId}&secret=${AppSecret}&js_code=${code}&grant_type=authorization_code`;
};
