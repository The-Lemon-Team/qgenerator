import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../../common/containers';
import { Settings } from '../../components';
import { Role } from '../../enums';

export const SettingsPageContainerPure: React.FC = () => {
  const { userStore } = useStores();

  return <Settings role={userStore.user?.role || Role.User} />;
};

export const SettingsPageContainer = observer(SettingsPageContainerPure);
