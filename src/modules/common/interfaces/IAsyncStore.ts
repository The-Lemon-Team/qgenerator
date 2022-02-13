import { AsyncStatus } from '../enum';

export interface IAsyncStore {
  readonly isFailed: boolean;
  readonly isSucceed: boolean;
  readonly isLoading: boolean;
  readonly status: AsyncStatus | null;

  setStatus(status: AsyncStatus): void;
  resetStatus(): void;
}
