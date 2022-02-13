import { Role } from '../../users/enums';
import { IQuestion } from '../../question/interfaces';
import { ProposalStatus } from '../enums';

export interface IProposal {
  authorId: string;
  id: string;
  login: string;
  questionId: IQuestion['id'];
  role: Role;
  status: ProposalStatus;
  text: string;
}
