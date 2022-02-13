import { ICreateUserDto } from '../../users/dto';
import { IAsyncStore } from '../../common/interfaces';

export interface IRegistrationStore {
  readonly async: IAsyncStore | null;

  registration(payload: ICreateUserDto): void;
}
