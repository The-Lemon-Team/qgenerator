import { RootStore } from '../stores';

import {
  authenticationStore,
  registrationStore,
} from '../../authentication/entities';
import { questionStore } from '../../question/entities';
import { questionsStore } from '../../questions/entities';
import { questionProposalsStore } from '../../proposals/entities';
import { userStore } from '../../user/entities';
import { usersStore } from '../../users/entities';

export const rootStore = new RootStore(
  questionStore,
  questionsStore,
  questionProposalsStore,
  authenticationStore,
  registrationStore,
  userStore,
  usersStore,
);
