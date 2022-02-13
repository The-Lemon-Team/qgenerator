import { action, makeAutoObservable, observable } from 'mobx';

import { IAsyncStore } from '../../../common/interfaces';
import { AsyncStatus } from '../../../common/enum';
import { IQuestionsStore } from '../../../questions/interfaces';
import {
  IProposalsService,
  IProposal,
  IQuestionProposalsStore,
} from '../../interfaces';
import { IProposeQuestionDto } from '../../dto';

export class QuestionProposalsStore implements IQuestionProposalsStore {
  @observable proposals: IProposal[] = [];

  constructor(
    private proposalsService: IProposalsService,
    private questionsStore: IQuestionsStore,
    private acceptingProcessAsync: IAsyncStore,
    public loading: IAsyncStore,
    public proposeProcessAsync: IAsyncStore,
  ) {
    makeAutoObservable(this);
  }

  acceptProposal = async (proposalId: IProposal['id']) => {
    this.acceptingProcessAsync.setStatus(AsyncStatus.Loading);

    try {
      const proposal = await this.proposalsService.acceptQuestion(proposalId);

      this.acceptingProcessAsync.setStatus(AsyncStatus.Success);
      this.updateProposal(proposal);
      this.questionsStore.loadQuestions();
    } catch (e) {
      console.error(e);
      this.acceptingProcessAsync.setStatus(AsyncStatus.Failed);
    }
  };

  declineProposal = async (proposalId: IProposal['id']) => {
    this.acceptingProcessAsync.setStatus(AsyncStatus.Loading);

    try {
      const proposal = await this.proposalsService.declineQuestion(proposalId);

      this.acceptingProcessAsync.setStatus(AsyncStatus.Success);
      this.updateProposal(proposal);
      this.questionsStore.loadQuestions();
    } catch (e) {
      this.acceptingProcessAsync.setStatus(AsyncStatus.Failed);
    }
  };

  loadProposals = async () => {
    this.loading.setStatus(AsyncStatus.Loading);

    try {
      const proposals = await this.proposalsService.getAllQuestionProposals();

      this.loading.setStatus(AsyncStatus.Success);
      this.resetProposals(proposals);
    } catch (e) {
      this.loading.setStatus(AsyncStatus.Failed);
    }
  };

  proposeQuestion = async (payload: IProposeQuestionDto) => {
    this.proposeProcessAsync.setStatus(AsyncStatus.Loading);

    try {
      const proposal = await this.proposalsService.proposeQuestion(payload);

      this.proposeProcessAsync.setStatus(AsyncStatus.Success);
      this.setProposal(proposal);
    } catch (e) {
      this.proposeProcessAsync.setStatus(AsyncStatus.Failed);
    }
  };

  private getProposalLocally = (proposalId: IProposal['id']) => {
    return this.proposals.find((proposal) => proposal.id === proposalId);
  };

  @action
  private resetProposals = (proposals: IProposal[] = []) => {
    this.proposals = proposals;
  };

  @action
  private updateProposal = (proposalToSet: IProposal) => {
    this.proposals = this.proposals.map((proposal) => {
      return proposal.id === proposalToSet.id ? proposalToSet : proposal;
    });
  };

  @action
  private setProposal = (proposal: IProposal) => {
    this.proposals = [...this.proposals, proposal];
  };
}
