import React, { useMemo } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  makeStyles,
  fade,
} from '@material-ui/core';
import cn from 'classnames';

import styles from './Button.module.css';

export interface ButtonProps
  extends Pick<
    MuiButtonProps,
    'disabled' | 'children' | 'onClick' | 'className' | 'type'
  > {
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary';
  size?: 'large' | 'small';
}

const useStyles = makeStyles((theme) => ({
  disabledButton: {
    '&:not(.MuiButton-outlined)': {
      color: theme.palette.common.white,
      background: `${fade('#CBCBCB', 0.35)} !important`,
    },
    '&.MuiButton-outlined': {
      color: `${fade('#CBCBCB', 0.35)} !important`,
      borderColor: `${fade('#CBCBCB', 0.35)} !important`,
    },
  },
}));

export const Button: React.FC<ButtonProps> = (props) => {
  const classes = useStyles();
  const rootClasses = useMemo(
    () =>
      cn(styles.button, {
        [styles.large]: props.size === 'large',
        [styles.small]: props.size === 'small',
      }),
    [props.size],
  );

  return (
    <MuiButton
      classes={{
        outlined: styles.outlined,
        root: rootClasses,
        disabled: classes.disabledButton,
      }}
      size="large"
      {...props}
    />
  );
};

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
  size: 'large',
};
