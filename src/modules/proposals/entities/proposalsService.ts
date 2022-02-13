import { ProposalsService } from '../services';

import { authTransport } from '../../common/entities';

export const proposalsService = new ProposalsService(authTransport);
