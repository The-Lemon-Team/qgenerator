import { AsyncStore } from '../../common/stores';
import { questionsStore } from '../../questions/entities';
import { QuestionProposalsStore } from '../stores';
import { proposalsService } from './proposalsService';

const acceptingProcessAsync = new AsyncStore();
const loading = new AsyncStore();
const proposeProcessAsync = new AsyncStore();

export const questionProposalsStore = new QuestionProposalsStore(
  proposalsService,
  questionsStore,
  acceptingProcessAsync,
  loading,
  proposeProcessAsync,
);
