import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Grid } from '@material-ui/core';

import { useStores } from '../../../common/containers';
import { Proposals, CreateProposal } from '../../components';

export const ProposalsContainerPure: React.FC = () => {
  const { questionProposalsStore, userStore } = useStores();

  useEffect(() => {
    if (!questionProposalsStore.loading.status) {
      questionProposalsStore.loadProposals();
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={8}>
        <Proposals
          proposals={questionProposalsStore.proposals}
          isLoading={
            questionProposalsStore.loading.isLoading ||
            questionProposalsStore.proposeProcessAsync.isLoading
          }
          acceptProposal={questionProposalsStore.acceptProposal}
          declineProposal={questionProposalsStore.declineProposal}
        />
      </Grid>
      <Grid item xs={4}>
        <CreateProposal
          onCreate={questionProposalsStore.proposeQuestion}
          authorId={userStore.user?.id || ''}
        />
      </Grid>
    </Grid>
  );
};

export const ProposalsContainer = observer(ProposalsContainerPure);
