import React from 'react';
import { Divider, makeStyles, Typography } from '@material-ui/core';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';

import { questionTranslations } from '../../../../translations';
import styles from './AnswerCounter.module.css';

interface IAnswerCounterProps {
  count: number;
}

const useStyles = makeStyles((theme) => ({
  divider: {
    background: theme.palette.text.disabled,
  },
  counter: {
    color: theme.palette.text.disabled,
    background: theme.palette.common.black,
  },
}));

export const AnswerCounter: React.FC<IAnswerCounterProps> = ({ count }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={styles.dividerWrapper}>
        <Typography
          variant="caption"
          color="textPrimary"
          className={cn(classes.counter, styles.counter)}
        >
          <FormattedMessage
            {...questionTranslations.answerCounter}
            values={{
              count,
            }}
          />
        </Typography>
        <Divider className={cn(styles.divider, classes.divider)} />
      </div>
    </div>
  );
};
