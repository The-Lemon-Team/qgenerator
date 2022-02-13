import { IAuthor } from './IAuthor';
import { IAnswer } from './IAnswer';
import { IProposal } from '../../proposals/interfaces';

export interface IQuestion {
  id: number;
  answers: IAnswer[];
  author: IAuthor;
  commentariesCount: number;
  dislikes: number;
  likes: number;
  proposalId?: IProposal['id'];
  text: string;
}
