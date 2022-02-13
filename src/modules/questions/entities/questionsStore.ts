import { AsyncStore } from '../../common/stores';
import { QuestionsStore } from '../stores';

import { questionsService } from './questionsService';

const createAsyncStore = new AsyncStore();
const loadingQuestionsStore = new AsyncStore();
export const questionsStore = new QuestionsStore(
  questionsService,
  createAsyncStore,
  loadingQuestionsStore,
);
