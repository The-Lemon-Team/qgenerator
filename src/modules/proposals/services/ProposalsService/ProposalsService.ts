import { IProposalsService } from '../../interfaces/IProposalsService';
import { IAuthTransport } from '../../../../api';
import { IProposal } from '../../interfaces';
import { IProposeQuestionDto } from '../../dto';

export class ProposalsService implements IProposalsService {
  private API_URL = '/api/proposals';
  private QUESTIONS_API_URL = `${this.API_URL}/questions`;
  private _httpTransport: IAuthTransport;

  constructor(httpTransport: IAuthTransport) {
    this._httpTransport = httpTransport;
  }

  acceptQuestion = (proposalId: IProposal['id']) => {
    return this._httpTransport.put<IProposal>(
      `${this.QUESTIONS_API_URL}/${proposalId}/accept`,
    );
  };

  declineQuestion = (proposalId: IProposal['id']) => {
    return this._httpTransport.put<IProposal>(
      `${this.QUESTIONS_API_URL}/${proposalId}/decline`,
    );
  };

  getAllQuestionProposals = () => {
    return this._httpTransport.get<IProposal[]>(`${this.QUESTIONS_API_URL}`);
  };

  proposeQuestion = (payload: IProposeQuestionDto) => {
    return this._httpTransport.put<IProposal>(
      `${this.QUESTIONS_API_URL}/propose`,
      payload,
    );
  };
}
