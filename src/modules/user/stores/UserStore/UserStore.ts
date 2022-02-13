import { action, makeAutoObservable, observable } from 'mobx';

import { AsyncStatus } from '../../../common/enum';

import { ITokens, IAsyncStore } from '../../../common/interfaces';
import { IUser } from '../../../users/interfaces';
import { IUserStore } from '../../interfaces';

export class UserStore implements IUserStore {
  @observable user: IUser | null = null;

  constructor(public readonly async: IAsyncStore) {
    makeAutoObservable(this);
  }

  @action
  completeUser(payload: IUser) {
    this.setUser(payload);
    this.async?.setStatus(AsyncStatus.Success);
  }

  @action
  setTokens(tokens: ITokens) {
    if (this.user) {
      this.user = { ...this.user, ...tokens };
    }
  }

  @action
  setUser(payload: IUser) {
    this.user = payload;
  }
}
