import { IQuestionsService } from '../../interfaces';
import {
  IRandomizeQuestionRequest,
  IRandomizeQuestionResponse,
} from '../../../question/dto';
import { IQuestion } from '../../../question/interfaces';
import { IAuthTransport } from '../../../../api';
import { ICreateQuestionDto } from '../../../common/dto';

export class QuestionsService implements IQuestionsService {
  constructor(private _httpTransport: IAuthTransport) {}

  create = (payload: ICreateQuestionDto): Promise<IQuestion> => {
    return this._httpTransport.post<IQuestion>(
      '/api/questions/create',
      payload,
    );
  };

  randomizeQuestion = ({
    excludeIds,
  }: IRandomizeQuestionRequest): Promise<IRandomizeQuestionResponse> => {
    return this._httpTransport.post<IRandomizeQuestionResponse>(
      '/api/questions/randomize',
      { excludeIds },
    );
  };

  getQuestion = (questionId: number): Promise<IQuestion> => {
    return this._httpTransport.get<IQuestion>(`/api/questions/${questionId}`);
  };

  getAllQuestions = (): Promise<IQuestion[]> => {
    return this._httpTransport.get<IQuestion[]>(`/api/questions`);
  };
}
