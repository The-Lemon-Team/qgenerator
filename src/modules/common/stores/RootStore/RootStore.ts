import {
  IAuthenticationStore,
  IRegistrationStore,
} from '../../../authentication/interfaces';
import { IUserStore } from '../../../user/interfaces';
import { IQuestionStore } from '../../../question/interfaces';
import { IQuestionsStore } from '../../../questions/interfaces';
import { IQuestionProposalsStore } from '../../../proposals/interfaces';
import { IUsersStore } from '../../../users/interfaces';

export class RootStore {
  constructor(
    readonly questionStore: IQuestionStore,
    readonly questionsStore: IQuestionsStore,
    readonly questionProposalsStore: IQuestionProposalsStore,
    readonly authenticationStore: IAuthenticationStore,
    readonly registrationStore: IRegistrationStore,
    readonly userStore: IUserStore,
    readonly usersStore: IUsersStore,
  ) {}
}
