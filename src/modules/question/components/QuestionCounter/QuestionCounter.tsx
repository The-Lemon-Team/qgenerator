import React from 'react';
import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { FormattedMessage } from 'react-intl';

import { questionTranslations } from '../../../../translations';
import styles from './QuestionCounter.module.css';

export interface IQuestionNumProps {
  count: number;
  isLoading: boolean;
}

export const QuestionCounter: React.FC<IQuestionNumProps> = ({
  count,
  isLoading,
}) => {
  return (
    <Typography variant="h2" className={styles.root}>
      {isLoading ? (
        <Skeleton width={134} height={24} className={styles.item} />
      ) : (
        <>
          <Typography
            variant="caption"
            className={styles.item}
            color="textPrimary"
          >
            <FormattedMessage {...questionTranslations.question} />
          </Typography>
          <Typography
            variant="caption"
            className={styles.item}
            color="textPrimary"
          >
            {'#'}
          </Typography>
        </>
      )}

      {isLoading ? (
        <Skeleton width={48} height={24} className={styles.item} />
      ) : (
        <Typography variant="caption" className={styles.item} color="primary">
          {count}
        </Typography>
      )}
    </Typography>
  );
};
