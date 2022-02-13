import { IUser } from './IUser';
import { IChangeRoleDto, ICreateUserDto } from '../dto';

export interface IUsersService {
  createUser(payload: ICreateUserDto): Promise<IUser>;
  changeUserRole(payload: IChangeRoleDto): Promise<IUser>;
  findUserByLogin(login: string): Promise<IUser>;
  getAllUsers(): Promise<IUser[]>;
}
