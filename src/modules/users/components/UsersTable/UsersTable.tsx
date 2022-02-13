import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { UserRow } from '../UserRow';

import { Role } from '../../enums';

import { IUser } from '../../interfaces';

interface UsersTableProps {
  users: IUser[];
  isLoading: boolean;

  onRoleChange: (userId: IUser['id'], role: Role) => void;
}

export const UsersTable: React.FC<UsersTableProps> = ({
  isLoading,
  users,
  onRoleChange,
}) => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Login</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Answers</TableCell>
          <TableCell>Proposals</TableCell>
          <TableCell>Questions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(
          ({
            questions,
            questionProposals,
            id,
            email,
            role,
            login,
            answers,
          }) => (
            <UserRow
              key={id}
              onRoleChange={onRoleChange}
              isLoading={isLoading}
              email={email}
              id={id}
              login={login}
              role={role}
              proposalsCount={questionProposals?.length || 0}
              questionCount={questions?.length || 0}
              answersCount={answers?.length || 0}
            />
          ),
        )}
      </TableBody>
    </Table>
  );
};
