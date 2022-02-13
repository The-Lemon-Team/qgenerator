import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { LoginFormContainer } from '../LoginFormContainer';
import { OnePageLayout } from '../../../common/components';
import { useStores, useNavigator } from '../../../common/containers';

export const LoginPageContainerPure: React.FC = () => {
  const { authenticationStore } = useStores();
  const navigator = useNavigator();

  useEffect(() => {
    if (authenticationStore.isLoggedIn) {
      navigator.goToSettings();
    }
  }, [authenticationStore.isLoggedIn]);

  return (
    <OnePageLayout>
      <LoginFormContainer />
    </OnePageLayout>
  );
};

export const LoginPageContainer = observer(LoginPageContainerPure);
