import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { QuestionRow } from '../QuestionRow';

import { IQuestion } from '../../../question/interfaces';

interface QuestionsProps {
  questions: IQuestion[];
  isLoading: boolean;
}

export const Questions: React.FC<QuestionsProps> = ({
  questions,
  isLoading,
}) => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Question Text</TableCell>
          <TableCell>Proposal ID</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {questions.map((row) => (
          <QuestionRow
            key={row.id}
            {...row}
            isLoading={isLoading}
            id={row.id}
            text={row.text}
            proposalId={row.proposalId}
          />
        ))}
      </TableBody>
    </Table>
  );
};
