import { action, makeAutoObservable, observable } from 'mobx';

import { IAsyncStore } from '../../interfaces';
import { AsyncStatus } from '../../enum';

export class AsyncStore implements IAsyncStore {
  @observable private _status: AsyncStatus | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoading() {
    return this.status === AsyncStatus.Loading;
  }

  get isFailed() {
    return this.status === AsyncStatus.Failed;
  }

  get isSucceed() {
    return this.status === AsyncStatus.Success;
  }

  get status() {
    return this._status;
  }

  @action
  setStatus = (status: AsyncStatus) => {
    this._status = status;
  };

  @action
  resetStatus = () => {
    this._status = null;
  };
}
