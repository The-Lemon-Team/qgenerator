import React from 'react';

import { Role } from '../../../users/enums';
import { useStores } from '../../../common/containers';
import { UserData } from '../../components';

export const UserDataContainer: React.FC = () => {
  const { userStore, questionProposalsStore } = useStores();

  return (
    <UserData
      role={userStore.user?.role || Role.User}
      login={userStore.user?.login || ''}
      email={userStore.user?.email || ''}
      answerCount={userStore.user?.answers?.length || 0}
      questionsCount={userStore.user?.questions?.length || 0}
      questionProposalsCount={questionProposalsStore.proposals.length || 0}
    />
  );
};
