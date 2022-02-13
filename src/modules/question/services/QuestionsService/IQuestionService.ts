import { IQuestion } from '../../interfaces';

export interface IQuestionService {
  increaseQuestionLikes(questionId: number): Promise<IQuestion>;
  decreaseQuestionLikes(questionId: number): Promise<IQuestion>;

  increaseQuestionDislikes(questionId: number): Promise<IQuestion>;
  decreaseQuestionDislikes(questionId: number): Promise<IQuestion>;
}
