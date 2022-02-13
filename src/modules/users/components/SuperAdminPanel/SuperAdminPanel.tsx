import React from 'react';

import { UsersTableContainer } from '../../containers';
import { AdminPanel } from '../AdminPanel';

export const SuperAdminPanel: React.FC = () => {
  return (
    <AdminPanel>
      <UsersTableContainer />
    </AdminPanel>
  );
};
