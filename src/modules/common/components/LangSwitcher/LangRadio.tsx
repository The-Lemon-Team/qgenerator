import React from 'react';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './LangRadio.module.css';

interface ILangRadioProps {
  checked?: boolean;
  language: string;

  onChange?: () => void;
}

const useColors = makeStyles((theme) => ({
  label: {
    color: theme.palette.text.disabled,
    '& input:checked + span': {
      color: theme.palette.primary.main,
    },
    '& input:not(:checked) + span': {
      color: theme.palette.text.disabled,
    },
    '& input:checked + span::before': {
      background: theme.palette.primary.main,
    },
  },
}));

export const LangRadio: React.FC<ILangRadioProps> = ({
  language,
  children,
  ...props
}) => {
  const colors = useColors();

  return (
    <label className={classNames(styles.label, colors.label)}>
      <input
        type="radio"
        name={'language'}
        id={`lang-${language}`}
        value={language}
        {...props}
      />
      <Typography className={styles.text} variant="caption">
        {children}
      </Typography>
    </label>
  );
};
