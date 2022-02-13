import React from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';

import { ProposalStatusIcon } from '../ProposalStatusIcon';

import { Role } from '../../../users/enums';
import { ProposalStatus } from '../../enums';

interface ProposalRowProps {
  id: string;
  text: string;
  login: string;
  role: Role;
  status: ProposalStatus;
  isLoading: boolean;

  onAccept: () => void;
  onDecline: () => void;
}

export const ProposalRow: React.FC<ProposalRowProps> = ({
  id,
  isLoading,
  login,
  role,
  status,
  text,

  onAccept,
  onDecline,
}) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {isLoading ? <Skeleton width={80} height={24} /> : id}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : text}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : login}
      </TableCell>
      <TableCell>
        {isLoading ? <Skeleton width={80} height={24} /> : role}
      </TableCell>
      <TableCell>
        {isLoading ? (
          <Skeleton width={80} height={24} />
        ) : (
          <ProposalStatusIcon status={status} />
        )}
      </TableCell>
      <TableCell align="center">
        <>
          <IconButton disabled={isLoading} onClick={onAccept}>
            <DoneIcon color="primary" />
          </IconButton>
          <IconButton disabled={isLoading} onClick={onDecline}>
            <CancelIcon color="primary" />
          </IconButton>
        </>
      </TableCell>
    </TableRow>
  );
};
