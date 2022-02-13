import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '../Button';

import styles from './FormActions.module.css';
import { commonTranslations } from '../../../../translations';

interface FormActionsProps {
  onSubmit: () => void;
}

export const FormActions: React.FC<FormActionsProps> = ({ onSubmit }) => {
  return (
    <div className={styles.actions}>
      <div className={styles.action}>
        <Button size="small" variant="text">
          <FormattedMessage {...commonTranslations.cancel} />
        </Button>
      </div>
      <div className={styles.action}>
        <Button size="small" type="submit" onClick={onSubmit}>
          <FormattedMessage {...commonTranslations.send} />
        </Button>
      </div>
    </div>
  );
};
