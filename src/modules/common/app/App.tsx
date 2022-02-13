import React from 'react';
import { Router } from 'react-router-dom';

import { Routes } from '../../../routes';
import { StoreProvider, NavigatorProvider } from '../containers';
import { ThemeProvider } from '../styles';
import { IntlProvider } from '../translations';
import { history } from '../entities';

import './index.css';
import './App.css';

export const App = () => {
  return (
    <StoreProvider>
      <IntlProvider>
        <Router history={history}>
          <NavigatorProvider>
            <ThemeProvider>
              <Routes />
            </ThemeProvider>
          </NavigatorProvider>
        </Router>
      </IntlProvider>
    </StoreProvider>
  );
};
