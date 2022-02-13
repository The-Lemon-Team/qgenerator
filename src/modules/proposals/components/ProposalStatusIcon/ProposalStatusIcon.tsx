import React from 'react';
import { Icon } from '@material-ui/core';
import BlockIcon from '@material-ui/icons/Block';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { ProposalStatus } from '../../enums';

interface ProposalStatusProps {
  status: ProposalStatus;
}

export const ProposalStatusIcon: React.FC<ProposalStatusProps> = ({
  status,
}) => {
  if (status === ProposalStatus.Accepted) {
    return (
      <Icon color="primary">
        <ThumbUpIcon />
      </Icon>
    );
  }

  if (status === ProposalStatus.Declined) {
    return (
      <Icon color="error">
        <BlockIcon />
      </Icon>
    );
  }

  return (
    <Icon color="action">
      <AccessTimeIcon />
    </Icon>
  );
};
