import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../../common/containers';
import { CreateQuestion, Questions } from '../../components';

export const QuestionsContainerPure: React.FC = () => {
  const { userStore, questionsStore } = useStores();

  useEffect(() => {
    if (!questionsStore.loading.status) {
      questionsStore.loadQuestions();
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={8}>
        <Questions
          questions={questionsStore.questions}
          isLoading={questionsStore.loading.isLoading}
        />
      </Grid>
      <Grid item xs={4}>
        <CreateQuestion
          onCreate={() => void 0}
          authorId={userStore.user?.id || ''}
        />
      </Grid>
    </Grid>
  );
};

export const QuestionsContainer = observer(QuestionsContainerPure);
