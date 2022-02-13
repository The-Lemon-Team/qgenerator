import React from 'react';

import { Answer } from '../Answer';

import { makeEmptyAnswer } from '../../helpers';
import styles from './Answers.module.css';

import { IAnswer } from '../../interfaces';

interface IAnswersProps {
  answers: IAnswer[];
  isLoading: boolean;
}

export const Answers: React.FC<IAnswersProps> = ({ answers, isLoading }) => {
  const answersToRender = isLoading
    ? [makeEmptyAnswer({ id: -1 }), makeEmptyAnswer({ id: -2 })]
    : answers;

  return (
    <>
      {answersToRender.map((answer) => (
        <div className={styles.item} key={answer.id}>
          <Answer isLoading={isLoading} key={answer.id} {...answer} />
        </div>
      ))}
    </>
  );
};
