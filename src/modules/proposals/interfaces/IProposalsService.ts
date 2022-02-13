import { IProposeQuestionDto } from '../dto';
import { IProposal } from './IProposal';

export interface IProposalsService {
  acceptQuestion(proposalId: IProposal['id']): Promise<IProposal>;
  declineQuestion(proposalId: IProposal['id']): Promise<IProposal>;
  getAllQuestionProposals(): Promise<IProposal[]>;
  proposeQuestion(payload: IProposeQuestionDto): Promise<IProposal>;
}
