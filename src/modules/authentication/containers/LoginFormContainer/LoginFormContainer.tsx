import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { LoginForm, ILoginForm } from '../../components';
import { useStores } from '../../../common/containers';

export const LoginFormContainerPure: React.FC = () => {
  const { authenticationStore } = useStores();
  const handleLogin = useCallback(
    (payload: ILoginForm) => {
      authenticationStore.login(payload);
    },
    [authenticationStore],
  );

  return (
    <LoginForm
      onLogin={handleLogin}
      isSucceed={!!authenticationStore.async?.isSucceed}
      isLoading={!!authenticationStore.async?.isLoading}
      isFailed={!!authenticationStore.async?.isFailed}
    />
  );
};

export const LoginFormContainer = observer(LoginFormContainerPure);
