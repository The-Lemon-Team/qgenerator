import { usersService } from '../../users/entities';
import { proposalsService } from '../../proposals/entities';
import { questionsService } from '../../questions/entities';
import { authTransport } from './authTransport';

import { IApi } from '../../../api';

export const api: IApi = {
  authTransport,
  questionsService,
  usersService,
  proposalsService,
};
