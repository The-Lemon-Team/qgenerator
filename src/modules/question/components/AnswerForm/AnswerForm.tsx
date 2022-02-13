import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button, TextField } from '../../../common/components';

import { commonTranslations } from '../../../../translations';
import styles from './AnswerForm.module.css';

interface IAnswerFormProps {
  isLoading?: boolean;
}

export const AnswerForm: React.FC<IAnswerFormProps> = () => {
  return (
    <div className={styles.root}>
      <TextField
        id="answer-field"
        label={<FormattedMessage {...commonTranslations.answer} />}
        fullWidth
      />
      <div className={styles.actions}>
        <div className={styles.action}>
          <Button size="small" variant="text">
            <FormattedMessage {...commonTranslations.cancel} />
          </Button>
        </div>
        <div className={styles.action}>
          <Button size="small">
            <FormattedMessage {...commonTranslations.send} />
          </Button>
        </div>
      </div>
    </div>
  );
};
