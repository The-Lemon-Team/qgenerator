import { defineMessages } from 'react-intl';

export const questionTranslations = defineMessages({
  question: {
    id: 'app_question_textLabel',
    defaultMessage: 'Вопрос',
  },
  answers: {
    id: 'qpp_question_answers',
    defaultMessage: 'Другие ответы',
  },
  answerCounter: {
    id: 'qpp_question_answerCounter',
    defaultMessage: 'Ответы: {count}',
  },
  oneMoreAnswer: {
    id: 'app_question_oneMoreAnswer',
    defaultMessage: 'Ещё вопрос',
  },
  writeYourAnswer: {
    id: 'app_question_writeYourAnswer',
    defaultMessage: 'Напиши свой ответ...',
  },
});
