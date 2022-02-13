import { IAsyncStore } from '../../common/interfaces';
import { IQuestion } from './IQuestion';

export interface IQuestionDataStore {
  readonly loading: IAsyncStore;
  readonly data: IQuestion;
  readonly questionId: number;
  readonly isLiked: boolean;
  readonly isDisliked: boolean;

  decreaseDislikes(): void;
  decreaseLikes(): void;
  dislikeQuestion(): void;
  increaseDislikes(): void;
  increaseLikes(): void;
  likeQuestion(): void;

  preRequestQuestionActions(): void;
  requestQuestionError(): void;
  requestQuestionSuccess(data: IQuestion): void;
  setData(data: IQuestion): void;
}
