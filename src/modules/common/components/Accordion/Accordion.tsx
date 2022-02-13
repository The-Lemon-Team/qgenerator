import React from 'react';
import {
  AccordionProps as MuiAccordionProps,
  Accordion as MuiAccordion,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    border: `1px solid ${theme.palette.common.white}`,
  },
}));

type AccordionProps = MuiAccordionProps;

export const Accordion: React.FC<AccordionProps> = (props) => {
  const classes = useStyles();

  return (
    <MuiAccordion
      classes={{
        root: classes.root,
      }}
      {...props}
    />
  );
};
