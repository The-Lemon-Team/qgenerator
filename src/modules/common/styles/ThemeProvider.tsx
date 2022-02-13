import React, { createContext } from 'react';
import { noop } from 'lodash';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { useThemeInteractions } from './useThemeInteractions';
import { mainTheme } from './mainTheme';
import { GlobalStyles } from './GlobalStyles';

export const ThemeInteractions = createContext({
  theme: mainTheme,
  isMainTheme: true,
  setMainTheme: noop,
  setSecondaryTheme: noop,
  switchTheme: noop,
});

export const ThemeProvider: React.FC = ({ children }) => {
  const themeInteractions = useThemeInteractions();

  return (
    <ThemeInteractions.Provider value={themeInteractions}>
      <ThemeInteractions.Consumer>
        {({ theme }) => (
          <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        )}
      </ThemeInteractions.Consumer>
      <GlobalStyles />
    </ThemeInteractions.Provider>
  );
};
