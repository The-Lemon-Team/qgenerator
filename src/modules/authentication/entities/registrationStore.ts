import { RegistrationStore } from '../stores';
import { AsyncStore } from '../../common/stores';

import { usersStore, usersService } from '../../users/entities';
import { userStore } from '../../user/entities';

const asyncStore = new AsyncStore();
export const registrationStore = new RegistrationStore(
  usersStore,
  userStore,
  usersService,
  asyncStore,
);
