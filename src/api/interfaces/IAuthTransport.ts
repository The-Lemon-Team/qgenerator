import { IHttpTransportOptions } from './IHttpTransportOptions';
import { ILoginRequestPayload } from './ILoginRequestPayload';
import { ITokensResponse } from './ITokenResponse';
import { IUser } from '../../modules/users/interfaces';
import { ITokens } from '../../modules/common/interfaces';

type TDataRequest = Record<string, any>;

export interface IAuthTransport {
  login(payload: ILoginRequestPayload): Promise<ITokensResponse>;
  logout(): void;
  updateToken(refreshToken: string): Promise<ITokensResponse>;
  getToken(): ITokens;
  userByToken(): Promise<IUser>;
  onLogout(listener: () => void): () => void;
  onRefreshToken(listener: () => void): () => void;
  setTokens(tokens: ITokens): void;

  delete<R = any>(url: string, config?: IHttpTransportOptions): Promise<R>;

  get<R = any>(url: string, config?: IHttpTransportOptions): Promise<R>;

  post<R = any, D = TDataRequest>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<R>;

  put<R = any, D = TDataRequest>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<R>;

  patch<R = any, D = TDataRequest>(
    url: string,
    data?: D,
    config?: IHttpTransportOptions,
  ): Promise<R>;
}
