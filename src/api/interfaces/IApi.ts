import { IAuthTransport } from './IAuthTransport';
import { IQuestionsService } from '../../modules/questions/interfaces';
import { IUsersService } from '../../modules/users/interfaces';
import { IProposalsService } from '../../modules/proposals/interfaces';

export interface IApi {
  authTransport: IAuthTransport;
  questionsService: IQuestionsService;
  usersService: IUsersService;
  proposalsService: IProposalsService;
}
