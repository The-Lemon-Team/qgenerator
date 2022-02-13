import React from 'react';

import styles from './OutWrapper.module.css';

export const OutWrapper: React.FC = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
