import { ITokens, IAsyncStore } from '../../common/interfaces';
import { ILoginDto } from '../dto';

export interface IAuthenticationStore {
  readonly tokens: ITokens | null;
  readonly async: IAsyncStore | null;
  readonly isLoggedIn: boolean;

  loadUserByToken(): void;
  setTokens(tokens: ITokens): void;
  resetToken(): void;
  login(payload: ILoginDto): Promise<void>;
  logout(): void;
}
