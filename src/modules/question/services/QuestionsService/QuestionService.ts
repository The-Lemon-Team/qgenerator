import { IAuthTransport } from '../../../../api';
import { IQuestion } from '../../interfaces';
import { IQuestionService } from './IQuestionService';

export class QuestionService implements IQuestionService {
  constructor(private _httpTransport: IAuthTransport) {}

  increaseQuestionLikes = (questionId: number): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `/api/questions/${questionId}/increaseLikes`,
    );
  };

  decreaseQuestionLikes = (questionId: number): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `/api/questions/${questionId}/decreaseLikes`,
    );
  };

  increaseQuestionDislikes = (questionId: number): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `/api/questions/${questionId}/increaseDislikes`,
    );
  };

  decreaseQuestionDislikes = (questionId: number): Promise<IQuestion> => {
    return this._httpTransport.put<IQuestion>(
      `/api/questions/${questionId}/decreaseDislikes`,
    );
  };
}
