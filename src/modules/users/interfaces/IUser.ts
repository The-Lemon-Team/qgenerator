import { IAnswer, IQuestion } from '../../question/interfaces';
import { IProposal } from '../../proposals/interfaces';
import { Role } from '../enums';

export interface IUser {
  id: string;
  login: string;
  answers?: IAnswer[];
  questions?: IQuestion[];
  questionProposals?: IProposal[];
  role: Role;
  email: string;
}
