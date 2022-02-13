import { IUser } from '../../users/interfaces';

export interface IProposeQuestionDto {
  text: string;
  authorId: IUser['id'];
}
