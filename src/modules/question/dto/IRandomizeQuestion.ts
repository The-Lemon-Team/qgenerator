import { IQuestion } from '../interfaces';

export interface IRandomizeQuestionRequest {
  excludeIds: number[];
}

export interface IRandomizeQuestionResponse {
  excludeIds: number[];
  question: IQuestion;
}
