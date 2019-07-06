export enum ApiErrorCode {
  TIMEOUT = -1, // 系统繁忙
  SUCCESS = 0, // 成功

  USER_ID_INVALID = 10001, // 用户id无效
  USER_NAME_INVALNAME = 10002, // 用户名无效
  USER_NOTFAILD = 10004, // 无效用户
  USER_PASSWORD_INVALPASSWORD = 10003, // 用户密码无效
}
