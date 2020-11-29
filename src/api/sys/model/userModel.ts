/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: Get user information
 */
export interface GetUserInfoByUserIdParams {
  userId: string | number;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoByUserIdModel {
  role: RoleInfo;
  // __Some-New-Token__id
  userId: string | number;
  // __Some-New-Token__
  username: string;
  // __Some-New-Token__
  realName: string;
  // __Some-New-Token__
  desc?: string;
}
