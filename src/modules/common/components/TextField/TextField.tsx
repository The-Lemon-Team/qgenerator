import React from 'react';
import {
  makeStyles,
  TextField as MSTextField,
  TextFieldProps,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  label: {
    color: theme.palette.text.primary,
  },
  fieldText: {
    color: theme.palette.text.primary,
  },
  focusedLabel: {
    color: `${theme.palette.text.disabled} !important`,
  },
  borders: {
    '&&&:before': {
      borderColor: `${theme.palette.text.disabled} !important`,
    },
  },
}));

export const TextField: React.FC<TextFieldProps> = (props) => {
  const classes = useStyles();

  return (
    <MSTextField
      InputLabelProps={{
        classes: {
          root: classes.label,
          formControl: classes.fieldText,
          shrink: classes.focusedLabel,
          focused: classes.borders,
        },
      }}
      InputProps={{
        classes: {
          root: classes.borders,
          input: classes.borders,
          underline: classes.borders,
          focused: classes.borders,
        },
      }}
      {...props}
    />
  );
};
