import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { IQuestion } from '../../../question/interfaces';
import { IProposal } from '../../../proposals/interfaces';

interface QuestionRowProps {
  id: IQuestion['id'];
  isLoading: boolean;
  proposalId?: IProposal['id'];
  text: string;
}

export const QuestionRow: React.FC<QuestionRowProps> = ({
  id,
  isLoading,
  proposalId,
  text,
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
        {isLoading ? <Skeleton width={80} height={24} /> : proposalId}
      </TableCell>
    </TableRow>
  );
};
