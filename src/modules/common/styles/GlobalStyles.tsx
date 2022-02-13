import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import reset from 'react-style-reset';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      ...reset,
    },
  }),
);

export const GlobalStyles: React.FC = () => {
  useStyles();

  return null;
};
