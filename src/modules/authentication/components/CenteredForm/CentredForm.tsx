import React from 'react';

import { OnePageLayout } from '../../../common/components';

import styles from './CenteredForm.module.css';

export const CentredForm: React.FC = ({ children }) => {
  return (
    <OnePageLayout>
      <div className={styles.root}>
        <div className={styles.form}>{children}</div>
      </div>
    </OnePageLayout>
  );
};
