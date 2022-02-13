import { QuestionsService } from '../services';

import { authTransport } from '../../common/entities';

export const questionsService = new QuestionsService(authTransport);
