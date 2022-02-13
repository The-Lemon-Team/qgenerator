import { AsyncStore } from '../../common/stores';
import { AuthenticationStore } from '../stores';

import { navigator } from '../../common/utils/navigator';
import { authTransport } from '../../common/entities';
import { userStore } from '../../user/entities';

const asyncStore = new AsyncStore();
export const authenticationStore = new AuthenticationStore(
  userStore,
  authTransport,
  asyncStore,
  navigator,
);
