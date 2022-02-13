import { ITokens } from '../../interfaces';

export const AUTH_TOKENS_STORAGE_KEY = 'auth_tokens';

export function restoreTokensFromStorage() {
  if (window?.localStorage) {
    try {
      return JSON.parse(
        window.localStorage.getItem(AUTH_TOKENS_STORAGE_KEY) || '{}',
      ) as ITokens;
    } catch (e) {
      console.error(e);
      return {} as ITokens;
    }
  }
}
export function storeTokensToStorage(tokens: ITokens) {
  if (window?.localStorage) {
    window.localStorage.setItem(
      AUTH_TOKENS_STORAGE_KEY,
      JSON.stringify(tokens),
    );
  }
}
