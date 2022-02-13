import { AsyncStore, LikesStore } from '../../common/stores';
import { QuestionStore, QuestionDataStore } from '../stores';

import { navigator } from '../../common/utils/navigator';
import { questionsService } from '../../questions/entities';
import { questionService } from './questionService';

const likesStore = new LikesStore();
const asyncStore = new AsyncStore();
const questionDataStore = new QuestionDataStore(likesStore, asyncStore);
export const questionStore = new QuestionStore(
  questionsService,
  questionService,
  questionDataStore,
  navigator,
);
