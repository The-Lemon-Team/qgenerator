import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@material-ui/core';

import { Answers } from '../Answers';
import { AnswerCounter } from '../AnswerCounter';

import { questionTranslations } from '../../../../translations';
import styles from './AnswerSection.module.css';

import { IAnswer } from '../../interfaces';

interface IAnswerSectionProps {
  answers: IAnswer[];
  isLoading: boolean;
}

export const AnswerSection: React.FC<IAnswerSectionProps> = ({
  answers,
  isLoading,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.answersTitleWrapper}>
        <div className={styles.widthWrapper}>
          <Typography
            variant="h4"
            className={styles.answersTitle}
            color="textPrimary"
          >
            <FormattedMessage {...questionTranslations.answers} />
          </Typography>
        </div>
      </div>
      <div className={styles.divider}>
        <AnswerCounter count={answers.length} />
      </div>
      <div className={styles.widthWrapper}>
        <Answers answers={answers} isLoading={isLoading} />
      </div>
    </div>
  );
};
