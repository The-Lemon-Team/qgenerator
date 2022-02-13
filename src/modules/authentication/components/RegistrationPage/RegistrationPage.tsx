import React from 'react';

import { CentredForm } from '../CenteredForm';
import { SignUpFormContainer } from '../../containers';

export const RegistrationPage: React.FC = () => {
  return (
    <CentredForm>
      <SignUpFormContainer />
    </CentredForm>
  );
};
