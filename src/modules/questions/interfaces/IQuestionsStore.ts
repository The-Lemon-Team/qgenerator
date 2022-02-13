import { ICreateQuestionDto } from '../../common/dto';
import { IAsyncStore } from '../../common/interfaces';
import { IQuestion } from '../../question/interfaces';

export interface IQuestionsStore {
  readonly questions: IQuestion[];
  readonly loading: IAsyncStore;

  createQuestion(payload: ICreateQuestionDto): void;
  loadQuestions(): void;
  removeQuestion(questionId: IQuestion['id']): void;
}
