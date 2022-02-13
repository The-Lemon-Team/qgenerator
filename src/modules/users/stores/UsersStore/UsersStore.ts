import { action, makeAutoObservable, observable } from 'mobx';

import { IAsyncStore } from '../../../common/interfaces';
import { AsyncStatus } from '../../../common/enum';
import { IUser, IUsersStore, IUsersService } from '../../interfaces';
import { Role } from '../../enums';

export class UsersStore implements IUsersStore {
  @observable users: IUser[] = [];

  constructor(
    private usersService: IUsersService,
    public loading: IAsyncStore,
    public changeRoleAsync: IAsyncStore,
  ) {
    makeAutoObservable(this);
  }

  @action
  loadUsers = async () => {
    try {
      this.loading.setStatus(AsyncStatus.Loading);

      const users = await this.usersService.getAllUsers();

      this.setUsers(users);
      this.loading.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.loading.setStatus(AsyncStatus.Failed);
    }
  };

  changeRole = async (userId: IUser['id'], role: Role) => {
    try {
      this.changeRoleAsync.setStatus(AsyncStatus.Loading);

      const updatedUser = await this.usersService.changeUserRole({
        userId,
        role,
      });
      this.updateUser(updatedUser);
      this.changeRoleAsync.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.changeRoleAsync.setStatus(AsyncStatus.Failed);
    }
  };

  @action
  private setUsers = (users: IUser[]) => {
    this.users = users;
  };

  @action
  private updateUser = (userToUpdate: IUser) => {
    this.users = this.users.map((user) =>
      user.id === userToUpdate.id ? userToUpdate : user,
    );
  };
}
