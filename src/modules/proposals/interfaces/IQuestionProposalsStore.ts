import { IAsyncStore } from '../../common/interfaces';
import { IProposeQuestionDto } from '../dto';
import { IProposal } from './IProposal';

export interface IQuestionProposalsStore {
  readonly proposals: IProposal[];
  readonly loading: IAsyncStore;
  readonly proposeProcessAsync: IAsyncStore;

  acceptProposal(payload: IProposal['id']): void;
  declineProposal(payload: IProposal['id']): void;
  loadProposals(): void;
  proposeQuestion(payload: IProposeQuestionDto): void;
}
