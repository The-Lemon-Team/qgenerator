import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { ProposalRow } from '../ProposalRow';

import { IProposal } from '../../interfaces';

interface ProposalsProps {
  proposals: IProposal[];
  isLoading: boolean;

  acceptProposal: (proposalId: IProposal['id']) => void;
  declineProposal: (proposalId: IProposal['id']) => void;
}

export const Proposals: React.FC<ProposalsProps> = ({
  proposals,
  isLoading,

  acceptProposal,
  declineProposal,
}) => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Question Text</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Author role</TableCell>
          <TableCell>Status</TableCell>
          <TableCell align="center" />
        </TableRow>
      </TableHead>
      <TableBody>
        {proposals.map((row) => (
          <ProposalRow
            key={row.id}
            {...row}
            isLoading={isLoading}
            onAccept={() => acceptProposal(row.id)}
            onDecline={() => declineProposal(row.id)}
          />
        ))}
      </TableBody>
    </Table>
  );
};
