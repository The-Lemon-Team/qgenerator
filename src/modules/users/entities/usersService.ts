import { UsersService } from '../services';

import { authTransport } from '../../common/entities';

export const usersService = new UsersService(authTransport);
