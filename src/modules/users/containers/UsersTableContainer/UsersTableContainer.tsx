import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import { useStores } from '../../../common/containers';
import { Accordion } from '../../../common/components';
import { UsersTable } from '../../components';

export const UsersTableContainerPure: React.FC = () => {
  const { usersStore } = useStores();

  useEffect(() => {
    if (!usersStore.loading.status) {
      usersStore.loadUsers();
    }
  }, []);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <div>Пользователи</div>
      </AccordionSummary>
      <AccordionDetails>
        <UsersTable
          users={usersStore.users}
          isLoading={usersStore.loading.isLoading}
          onRoleChange={usersStore.changeRole}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export const UsersTableContainer = observer(UsersTableContainerPure);
