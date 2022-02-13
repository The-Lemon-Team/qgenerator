import React from 'react';

import { Header } from '../Header';
import { BackgroundWrapper } from '../BackgroundWrapper';

import styles from './OnePageLayout.module.css';

export const OnePageLayout: React.FC = ({ children }) => {
  return (
    <BackgroundWrapper onePage className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      {children}
    </BackgroundWrapper>
  );
};
