import { IAnswer } from '../interfaces/IAnswer';

export const makeEmptyAnswer = ({
  id = -1,
}: Partial<IAnswer> = {}): IAnswer => ({
  id,
  likes: 0,
  dislikes: 0,
  disliked: false,
  liked: false,
  avatar: '',
  authorName: '',
  date: '',
  text: '',
});
