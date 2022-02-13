import { QuestionService } from '../services';

import { authTransport } from '../../common/entities';

export const questionService = new QuestionService(authTransport);
