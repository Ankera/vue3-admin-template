//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface loginForm {
  username: string
  password: string
}

interface dataType extends Record<string, any> {
  token?: string
  message?: string
}

// //定义全部接口返回数据都拥有ts类型
// export interface ResponseData {
//   code: number
//   message: string
//   ok: boolean
// }

//定义登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

interface userInfo extends Record<string, any> {
  userId: string
  avatar: string
  username: string
}

interface user {
  checkUser: userInfo
}

//定义获取用户信息返回数据类型
export interface userResponseData {
  code: number
  data: user
}
