import React, { useCallback } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { RoleField } from '../RoleField';

import { IUser } from '../../interfaces';
import { Role } from '../../enums';

interface UserRowProps extends Pick<IUser, 'id' | 'login' | 'role' | 'email'> {
  answersCount: number;
  isLoading: boolean;
  proposalsCount: number;
  questionCount: number;

  onRoleChange: (userId: IUser['id'], role: Role) => void;
}

export const UserRow: React.FC<UserRowProps> = ({
  id,
  answersCount,
  email,
  isLoading,
  login,
  proposalsCount,
  questionCount,
  role,

  onRoleChange,
}) => {
  const handleRoleChange = useCallback(
    (role: Role) => {
      onRoleChange(id, role);
    },
    [onRoleChange, id],
  );

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {isLoading ? <Skeleton width={80} height={24} /> : id}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : login}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : email}
      </TableCell>
      <TableCell>
        {isLoading ? (
          <Skeleton width={80} height={24} />
        ) : (
          <RoleField
            id="user-role-field"
            role={role}
            onRoleChange={handleRoleChange}
          />
        )}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : answersCount}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : proposalsCount}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : questionCount}
      </TableCell>
    </TableRow>
  );
};
