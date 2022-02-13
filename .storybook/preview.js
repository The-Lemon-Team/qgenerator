import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Story } from '@storybook/react';

import { mainTheme, secondaryTheme } from '../src/modules/common/styles';
import { IntlProvider } from '../src/modules/common/translations';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['dark', 'light'],
    },
  },
};

// Function to obtain the intended theme
const getTheme = (themeName) => {
  return themeName === 'dark' ? mainTheme : secondaryTheme;
};

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  return (
    <IntlProvider>
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
    </IntlProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
