import { createMuiTheme } from '@material-ui/core';

export const commonTheme = createMuiTheme({
  typography: {
    fontSize: 16,
    fontFamily: ['Montserrat', '"Helvetica Neue"', 'Arial', 'Roboto'].join(','),
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});
