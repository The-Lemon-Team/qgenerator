import { IAsyncStore } from '../../common/interfaces';
import { Role } from '../enums';
import { IUser } from './IUser';

export interface IUsersStore {
  readonly users: IUser[];
  readonly loading: IAsyncStore;
  readonly changeRoleAsync: IAsyncStore;

  loadUsers(): void;
  changeRole(userId: IUser['id'], role: Role): void;
}
