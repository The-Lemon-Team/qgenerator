import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { ISignUpForm, SignUpForm } from '../../components';
import { useStores } from '../../../common/containers';

export const SignUpFormContainerPure: React.FC = () => {
  const { authenticationStore, registrationStore } = useStores();

  const handleSignUp = useCallback(
    (payload: ISignUpForm) => {
      registrationStore.registration(payload);
    },
    [authenticationStore],
  );

  return (
    <SignUpForm
      onSignUp={handleSignUp}
      isLoading={!!registrationStore.async?.isLoading}
      isFailed={!!registrationStore.async?.isFailed}
      isSucceed={!!registrationStore.async?.isSucceed}
    />
  );
};

export const SignUpFormContainer = observer(SignUpFormContainerPure);
