import React from 'react';

import { SuperAdminPanel } from '../SuperAdminPanel';
import { AdminPanel } from '../AdminPanel';

import { Role } from '../../enums';

import styles from './Settings.module.css';

interface SettingsProps {
  role: Role;
}

export const Settings: React.FC<SettingsProps> = ({ role }) => {
  const isAdmin = role === Role.Admin;
  const isSuperAdmin = role === Role.SuperAdmin;

  return (
    <div className={styles.informationWrapper}>
      <div className={styles.informationContainer}>
        {isAdmin && <AdminPanel />}
        {isSuperAdmin && <SuperAdminPanel />}
      </div>
    </div>
  );
};
