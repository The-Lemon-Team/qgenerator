import { IUser } from '../interfaces';
import { Role } from '../enums';

export interface IChangeRoleDto {
  userId: IUser['id'];
  role: Role;
}
