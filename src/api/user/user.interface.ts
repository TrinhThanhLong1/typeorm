import { UserStatus } from './user.constant';

export interface ICreateUser {
  email: string;
  last_name: string;
  first_name: string;
  birthday?: string;
  start_date?: string;
  phone?: string;
  type?: number;
  gender?: number;
  position?: string;
  level?: number;
  team: number;
}

export interface IUpdateUser {
  name?: string;
  status?: UserStatus;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
