import React from 'react';
import { Route, Switch } from 'react-router';

import { QuestionPageContainer } from './modules/question/containers';
import {
  certainQuestionUrl,
  registrationUrl,
  loginUrl,
  settingsUrl,
  mainPageUrl,
} from './modules/common/utils';
import { SettingsPage } from './modules/users/components';
import { PrivateRoute } from './modules/common/containers';
import { RegistrationPage } from './modules/authentication/components';
import { LoginPageContainer } from './modules/authentication/containers';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={mainPageUrl}>
        MAINPAGE
      </Route>
      <Route path={certainQuestionUrl} exact>
        <QuestionPageContainer />
      </Route>
      <Route path={registrationUrl} exact>
        <RegistrationPage />
      </Route>
      <Route path={loginUrl} exact>
        <LoginPageContainer />
      </Route>
      <PrivateRoute path={settingsUrl} exact>
        <SettingsPage />
      </PrivateRoute>
    </Switch>
  );
};
