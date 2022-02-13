import { IAsyncStore } from '../../common/interfaces';
import { IUser } from '../../users/interfaces';

export interface IUserStore {
  readonly async: IAsyncStore | null;
  readonly user: IUser | null;

  completeUser(payload: IUser): void;
  setUser(payload: IUser): void;
}
