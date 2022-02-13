import { createMuiTheme } from '@material-ui/core';

import { commonTheme } from './commonTheme';

export const mainTheme = createMuiTheme({
  ...commonTheme,
  palette: {
    common: {
      black: '#0D0E13',
      white: '#FDFFFC',
    },
    primary: {
      main: '#E71D36',
    },
    secondary: {
      main: '#0057FF',
    },
    warning: {
      main: '#FF9F1C',
    },
    text: {
      primary: '#FDFFFC',
      disabled: '#8D8D8D',
    },
    action: {
      active: '#FDFFFC',
    },
  },
});
