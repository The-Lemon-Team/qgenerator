import { action, computed, makeAutoObservable, observable } from 'mobx';
import { isEqual } from 'lodash';

import {
  restoreTokensFromStorage,
  wait,
  storeTokensToStorage,
} from '../../../common/utils';

import { AsyncStatus } from '../../../common/enum';
import { INavigator, ITokens, IAsyncStore } from '../../../common/interfaces';
import { IAuthTransport } from '../../../../api';
import { IUserStore } from '../../../user/interfaces';
import { ILoginDto } from '../../dto';
import { IAuthenticationStore } from '../../interfaces';

export class AuthenticationStore implements IAuthenticationStore {
  @observable readonly async: IAsyncStore | null = null;
  @observable tokens: ITokens | null = null;

  constructor(
    private userStore: IUserStore,
    private authTransport: IAuthTransport,
    private asyncStore: IAsyncStore,
    private navigator: INavigator,
  ) {
    makeAutoObservable(this);
    this.authTransport.onLogout(this.resetToken);
    this.authTransport.onRefreshToken(this.syncTokens);

    this.async = asyncStore;
    this.onInit();
  }

  @computed get isLoggedIn() {
    return !!this.tokens?.refreshToken && !!this.tokens?.accessToken;
  }

  @action
  setTokens = (tokens: ITokens) => {
    const areTokensEqual = isEqual(tokens, this.authTransport.getToken());

    this.tokens = tokens;
    !areTokensEqual && this.authTransport.setTokens(tokens);
    storeTokensToStorage(tokens);
  };

  @action
  resetToken = () => {
    this.setTokens({
      accessToken: '',
      refreshToken: '',
    });
  };

  @action
  syncTokens = () => {
    const transportTokens = this.authTransport.getToken();

    this.setTokens(transportTokens);
  };

  @action
  async loadUserByToken() {
    this.async?.setStatus(AsyncStatus.Loading);

    try {
      const user = await this.authTransport.userByToken();

      this.userStore.completeUser(user);
      this.async?.setStatus(AsyncStatus.Success);
    } catch (e) {
      this.syncTokens();
      this.async?.setStatus(AsyncStatus.Failed);
    }
  }

  @action
  async login(payload: ILoginDto) {
    this.async?.setStatus(AsyncStatus.Loading);

    try {
      const tokens = await this.authTransport.login(payload);
      const user = await this.authTransport.userByToken();

      this.setTokens(tokens);
      this.userStore.setUser(user);
      await wait(2500);
      this.userStore.completeUser(user);
      this.navigator.goToSettings();

      this.async?.setStatus(AsyncStatus.Success);
    } catch (e) {
      console.error(e);
      this.async?.setStatus(AsyncStatus.Failed);
      this.resetToken();
    }
  }

  async logout() {
    this.resetToken();
  }

  private onInit() {
    const tokens = restoreTokensFromStorage();

    if (tokens) {
      this.setTokens(tokens);
      this.loadUserByToken();
    }
  }
}
