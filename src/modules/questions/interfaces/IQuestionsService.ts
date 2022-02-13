import { ICreateQuestionDto } from '../../common/dto';
import { IQuestion } from '../../question/interfaces';
import {
  IRandomizeQuestionRequest,
  IRandomizeQuestionResponse,
} from '../../question/dto';

export interface IQuestionsService {
  create(payload: ICreateQuestionDto): Promise<IQuestion>;
  randomizeQuestion(
    payload: IRandomizeQuestionRequest,
  ): Promise<IRandomizeQuestionResponse>;
  getQuestion(questionId: number): Promise<IQuestion>;
  getAllQuestions(): Promise<IQuestion[]>;
}
