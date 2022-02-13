import { questionUrl } from './questionUrl';

export const buildQuestionId = (questionId: number) =>
  `${questionUrl}/${questionId}`;
